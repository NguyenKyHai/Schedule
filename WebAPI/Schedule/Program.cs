using WebApp.Core.DataAccess;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Schedule.Jwt;
using Schedule.Sercurity;
using Schedule.Middleware;
using Schedule.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.Google;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpContextAccessor();
builder.Services.AddDbContext<WebAppContext>(opt => opt.UseSqlServer(builder.Configuration.GetConnectionString("WebAppContext")));

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = GoogleDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
        ClockSkew = TimeSpan.Zero
    };
    options.Events = new JwtBearerEvents
    {
        OnMessageReceived = context =>
        {
            context.Token = context.Request.Headers["jwt"];
            return Task.CompletedTask;
        },
        OnAuthenticationFailed = context =>
        {

            if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
            {
                context.Response.Headers.Add("Token-Expired", "true");
                Exception exTokenExpired = new("Token-Expired!");
            }
            return Task.CompletedTask;
        }, 
       /* OnChallenge = context =>
        {
            context.HandleResponse();

            var payload = new JObject
            {
                ["error"] = context.Error,
                ["error_description"] = context.ErrorDescription,
                ["error_uri"] = context.ErrorUri
            };

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 401;

            return context.Response.WriteAsync(payload.ToString());
        }*/
    };
})
.AddCookie()
.AddGoogle(options =>
{
    options.ClientId = "793406760016-ne10lu6rpi3iorbf4lg3fv890u2s2837.apps.googleusercontent.com";
    options.ClientSecret = "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";
    options.CallbackPath = "/signin-google";
});

builder.Services.AddScoped<JwtTokenGenerator>();
builder.Services.AddScoped<MyAuthorization>();
builder.Services.AddScoped<ICommonHelper, CommonHelper>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCustomForbiddenMiddleware();
app.UseHttpsRedirection();

app.UseCors(builder =>
{
    builder.WithOrigins("http://localhost:3000", "http://localhost:54607", "http://192.168.1.5:100", "https://oms-vista.vn/kintai")
    .AllowAnyHeader().AllowAnyMethod().AllowCredentials();
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
