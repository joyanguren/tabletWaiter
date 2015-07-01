﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace tabletWaiter.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int TableNumber { get; set; }
        public List<OrderItem> ItemsOrdered { get; set; }
    }
}