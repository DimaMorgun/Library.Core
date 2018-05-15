using System.IO;
using Library.Core.BusinessLogicLayer.Services;
using Library.Core.BysinessLogicLayer.AutoMapperConfig;
using Library.Core.DataAccessLayer.Contexts;
using Library.Core.DataAccessLayer.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Library.Core.Web
{
  public class Startup
  {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddDbContext<LibraryCoreContext>(options =>
        options.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=LibraryCore;Trusted_Connection=True;"));

      services.AddMvc();

      services.AddTransient<BookRepository>();
      services.AddTransient<AuthorRepository>();
      services.AddTransient<BookInAuthorRepository>();
      services.AddTransient<PublicationHouseRepository>();
      services.AddTransient<BookInPublicationHouseRepository>();
      services.AddTransient<MagazineRepository>();
      services.AddTransient<BrochureRepository>();

      services.AddTransient<PublicationService>();
      services.AddTransient<BookService>();
      services.AddTransient<AuthorService>();
      services.AddTransient<PublicationHouseService>();
      services.AddTransient<MagazineService>();
      services.AddTransient<BrochureService>();

      AutoMapperConfig.InitializeInstances();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 &&
                 !Path.HasExtension(context.Request.Path.Value) &&
                 !context.Request.Path.Value.StartsWith("/api/"))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      using (var scope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
      {
        scope.ServiceProvider.GetService<LibraryCoreContext>().Database.Migrate();
      }

      app.UseMvcWithDefaultRoute();
      app.UseDefaultFiles();
      app.UseStaticFiles();
    }
  }
}
