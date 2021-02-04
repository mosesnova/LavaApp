using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NonProfit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NonProfit.Controllers
{
    public class PersonalDetailsController : Controller
    {
        private readonly aspnetNonProfit53bc9b9d9d6a45d484292a2761773502Context _context;

        public PersonalDetailsController(aspnetNonProfit53bc9b9d9d6a45d484292a2761773502Context context)
        {
            _context = context;
        }
        // GET: PersonalDetailsController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PersonalDetailsController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PersonalDetailsController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PersonalDetailsController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult Create([FromBody]PersonalDetail collection)
        {
            PersonalDetail pd = new PersonalDetail();
            //pd.Id = from i in 1 to 100 select i;
            pd.Id = 9;
            pd.DateofBirth = collection.DateofBirth;
            pd.Email = collection.Email;
            pd.FirstName = collection.FirstName;
            pd.LastName = collection.LastName;
            pd.MiddleName = collection.MiddleName;
            pd.Photo = collection.Photo;
            try
            {
                _context.Add(pd);
                _context.SaveChanges();
                return Content("success");
            }
            catch(Exception e)
            {
                throw;
                return View();
            }
        }

        // GET: PersonalDetailsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PersonalDetailsController/Edit/5
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

        // GET: PersonalDetailsController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PersonalDetailsController/Delete/5
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
