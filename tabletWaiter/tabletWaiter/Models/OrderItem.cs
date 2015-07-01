using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace tabletWaiter.Models
{
    public class OrderItem
    {
        public int Id { get; set; }
        public int ItemId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
    }
}