namespace Library.Core.DataAccessLayer.Connection
{
    public static class MSSQLConnection
    {
        public static string ConnectionString { get; set; }

        static MSSQLConnection()
        {
            ConnectionString = @"data source=(LocalDb)\MSSQLLocalDB;initial catalog=LibraryCore;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework";
        }
    }
}
