using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tabletWaiter.Data;

namespace tabletWaiter.Controllers
{
    [RoutePrefix("api/items")]
    public class ItemsController : ApiController
    {
        private ITabletWaiterRepository _repo { get; set; }

        public ItemsController(ITabletWaiterRepository repo)
        {
            _repo = repo;
        }

        [Route("all")]
        public HttpResponseMessage getAllItems()
        {
            var items = _repo.GetAllItems();

            if (items == null)
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, items);
            }
        }

    }
}
