﻿using System.Drawing;

namespace tabletWaiter.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public string Categories { get; set; }
        public bool Hidden { get; set; }
    }
}