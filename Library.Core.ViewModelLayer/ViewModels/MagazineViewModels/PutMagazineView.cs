﻿namespace Library.Core.ViewModelLayer.ViewModels.Magazine
{
    public class PutMagazineView
    {
        public int MagazineId { get; set; }
        public string Name { get; set; }
        public int? Number { get; set; }
        public int? YearOfPublishing { get; set; }

        public PutMagazineView()
        {

        }
    }
}