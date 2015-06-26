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
    [RoutePrefix("api/categories")]
    public class CategoriesController : ApiController
    {
        private ITabletWaiterRepository _repo { get; set; }

        public CategoriesController(ITabletWaiterRepository repo)
        {
            _repo = repo;
        }

        [Route("add")]
        [HttpPost]
        public HttpResponseMessage createCategory([FromBody] Category category)
        {
            if (_repo.CreateCategory(category) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK, category);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [Route("all")]
        public HttpResponseMessage getAllCategories()
        {
            var categories = _repo.GetAllCategories();

            if (categories == null)
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, categories);
            }
        }

        [Route("delete/{categoryId}")]
        [HttpDelete]
        public HttpResponseMessage deleteCategory(int categoryId)
        {
            if (_repo.deleteCategory(categoryId) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK, categoryId);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NoContent);
            }
        }
    }
}
