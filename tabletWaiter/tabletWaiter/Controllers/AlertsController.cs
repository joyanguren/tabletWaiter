using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tabletWaiter.Data;

namespace tabletWaiter.Controllers
{
    [RoutePrefix("api/alerts")]

    public class AlertsController : ApiController
    {
        private ITabletWaiterRepository _repo { get; set; }

        public AlertsController(ITabletWaiterRepository repo)
        {
            _repo = repo;
        }

        [Route("addSimpleAlert/{tableNumber}")]
        [HttpPost]
        public HttpResponseMessage addSimpleAlert(string tableNumber)
        {
            if (_repo.AddSimpleAlert(tableNumber) && _repo.Save())
            {
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        [Route("allSimple")]
        [HttpPost]
        public HttpResponseMessage getAllSimpleAlerts()
        {
            var alerts = _repo.AllSimpleAlerts();

            if(alerts != null)
            {
                return Request.CreateResponse(HttpStatusCode.OK, alerts);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
    }
}
