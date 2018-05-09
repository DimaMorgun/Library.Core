namespace Library.Core.ViewModelLayer.ViewModels.Configuration
{
    public class AppSettingView
    {
        public ConnectionStringAppSettingView ConnectionStrings { get; set; }
    }

    public class ConnectionStringAppSettingView
    {
        public string DefaultConnection { get; set; }
    }
}
