using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Common
{
    public class CurrentUser
    {
        public CurrentUser(IEnumerable<System.Security.Claims.Claim> claims) {

            Email = claims.First(c => c.Type == "email").Value;
            Name = claims.First(c => c.Type == "name").Value;
        }

        
        public string Email { get; set; }
        public string Name { get; set; }
    }
}
