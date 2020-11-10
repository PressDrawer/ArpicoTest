using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ArpicoTest.Migrations
{
    public partial class initiala : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Birthday",
                table: "Customers",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "Birthday",
                table: "Customers",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(string));
        }
    }
}
