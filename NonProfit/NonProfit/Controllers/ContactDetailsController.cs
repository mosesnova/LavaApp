using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NonProfit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NonProfit.Controllers
{
    public class ContactDetailsController : Controller
    {
        private readonly aspnetNonProfit53bc9b9d9d6a45d484292a2761773502Context _context;

        public ContactDetailsController(aspnetNonProfit53bc9b9d9d6a45d484292a2761773502Context context)
        {
            _context = context;
        }
        // GET: ContactDetailsController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ContactDetailsController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ContactDetailsController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ContactDetailsController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Create([FromBody]ContactDetail collection)
        {
            try
            {
                return View();
            }
            catch
            {
                return View();
            }
        }

        // GET: ContactDetailsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ContactDetailsController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ContactDetailsController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ContactDetailsController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
