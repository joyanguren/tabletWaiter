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
    [RoutePrefix("api/items")]
    public class ItemsController : ApiController
    {
        private ITabletWaiterRepository _repo { get; set; }

        public ItemsController(ITabletWaiterRepository repo)
        {
            _repo = repo;
        }

        [Route("{itemId}")]
        [HttpGet]
        public HttpResponseMessage getItem(int itemId)
        {
            var item = _repo.GetItem(itemId);

            if (item == null)
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, item);
            }
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

        [Route("add")]
        public HttpResponseMessage addItem([FromBody] Item itemToAdd)
        {
            if (_repo.addItem(itemToAdd) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        [Route("delete/{itemId}")]
        [HttpDelete]
        public HttpResponseMessage deleteItem(int itemId)
        {
            if (_repo.deleteItem(itemId) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK, itemId);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }

        [Route("edit")]
        [HttpPost]
        public HttpResponseMessage editItem([FromBody] Item itemToAdd)
        {
            if (_repo.editItem(itemToAdd) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }
    }
}
