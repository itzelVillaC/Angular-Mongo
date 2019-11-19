using DAL.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;



namespace ClassifiedAdvertisementsWebsite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<AdvertisementService>();
            services.AddScoped<UserService>();
            services.AddScoped<CategoryService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(jwt => jwt.UseGoogle(
             clientId: "1013786917959-spda7tk8i6t6mkkpgi6j8qv3aadpmubk.apps.googleusercontent.com"
          ));
            services.AddCors(options =>
          options.AddPolicy("myPolicy",
          builder =>
          {
              builder
                  .AllowAnyOrigin()
                  .AllowAnyMethod().AllowAnyHeader().AllowCredentials();
          }
          ));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseAuthentication();
            app.UseCors("myPolicy");
            app.UseMvc();
        }
    }
}
