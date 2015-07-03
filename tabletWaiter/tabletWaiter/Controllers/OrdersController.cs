using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tabletWaiter.Data;
using tabletWaiter.Models;

namespace tabletWaiter.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        private ITabletWaiterRepository _repo;
        public OrdersController(ITabletWaiterRepository repo)
        {
            _repo = repo;
        }

        [Route("all")]
        public HttpResponseMessage GetOrder()
        {
            var orders = _repo.GetOrder();

            if (orders == null)
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, orders);
            }
        }

        [Route("add")]
        [HttpPost]
        public HttpResponseMessage addOrderItem([FromBody] Order order)
        {
            if (_repo.addOrder(order) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
    }
}
