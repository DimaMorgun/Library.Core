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

      services.AddSingleton<BookRepository>();
      services.AddSingleton<AuthorRepository>();
      services.AddSingleton<BookInAuthorRepository>();
      services.AddSingleton<PublicationHouseRepository>();
      services.AddSingleton<BookInPublicationHouseRepository>();
      services.AddSingleton<MagazineRepository>();
      services.AddSingleton<BrochureRepository>();

      //BookRepository bookRepository = services.BuildServiceProvider().GetService<BookRepository>();
      //AuthorRepository authorRepository = services.BuildServiceProvider().GetService<AuthorRepository>();
      //BookInAuthorRepository bookInAuthorRepository = services.BuildServiceProvider().GetService<BookInAuthorRepository>();
      //PublicationHouseRepository publicationHouseRepository = services.BuildServiceProvider().GetService<PublicationHouseRepository>();
      //BookInPublicationHouseRepository bookInPublicationHouseRepository = services.BuildServiceProvider().GetService<BookInPublicationHouseRepository>();
      //MagazineRepository magazineRepository = services.BuildServiceProvider().GetService<MagazineRepository>();
      //BrochureRepository brochureRepository = services.BuildServiceProvider().GetService<BrochureRepository>();

      //services.AddSingleton(provider => new PublicationService(bookRepository, magazineRepository, brochureRepository));
      //services.AddSingleton(provider => new BookService(bookRepository, publicationHouseRepository, bookInPublicationHouseRepository, authorRepository, bookInAuthorRepository));
      //services.AddSingleton(provider => new AuthorService(authorRepository, bookRepository, bookInAuthorRepository));
      //services.AddSingleton(provider => new PublicationHouseService(publicationHouseRepository, bookRepository, bookInPublicationHouseRepository));
      //services.AddSingleton(provider => new MagazineService(magazineRepository));
      //services.AddSingleton(provider => new BrochureService(brochureRepository));
      services.AddSingleton<PublicationService>();
      services.AddSingleton<BookService>();
      services.AddSingleton<AuthorService>();
      services.AddSingleton<PublicationHouseService>();
      services.AddSingleton<MagazineService>();
      services.AddSingleton<BrochureService>();

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
