﻿using Dapper.Contrib.Extensions;

namespace Library.Core.EntityModelLayer.Models
{
    public class BookAuthor
    {
        [Key]
        public int BookAuthorId { get; set; }
        public int BookId { get; set; }
        [Write(false)]
        public virtual Book Book { get; set; }
        public int AuthorId { get; set; }
        [Write(false)]
        public virtual Author Author { get; set; }
    }
}
