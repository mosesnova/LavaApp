using System;
using System.Collections.Generic;

#nullable disable

namespace NonProfit.Models
{
    public partial class ContactDetail
    {
        public int PersonalDetailsId { get; set; }
        public string HomeAddress1 { get; set; }
        public string HomeCity { get; set; }
        public string HomeZipCode { get; set; }
        public string MobilePhone { get; set; }
        public string HomeAddress2 { get; set; }
    }
}
