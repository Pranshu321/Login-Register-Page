(this["webpackJsonpconditional-rendering"] =
	this["webpackJsonpconditional-rendering"] || []).push([
	[0],
	{
		3: function (e, t, n) {
			e.exports = n(9);
		},
		9: function (e, t, n) {
			"use strict";
			n.r(t);
			var r = n(0),
				a = n.n(r),
				o = n(2);
			var l = function (e) {
				return a.a.createElement("input", {
					type: e.type,
					placeholder: e.holder,
				});
			};
			var c = function () {
				return a.a.createElement(
					"form",
					{ className: "form" },
					a.a.createElement("h1", null, "Register Here ,"),
					a.a.createElement(l, { type: "text", holder: "Username" }),
					a.a.createElement(l, { type: "password", holder: "Password" }),
					a.a.createElement(l, {
						type: "password",
						holder: "Conform Password",
					}),
					a.a.createElement("button", { type: "submit" }, "Register")
				);
			};
			var s = function () {
				return a.a.createElement(
					"div",
					{ className: "container" },
					a.a.createElement(c, null)
				);
			};
			n.n(o).a.render(
				a.a.createElement(s, null),
				document.getElementById("root")
			);
		},
	},
	[[3, 1, 2]],
]);
//# sourceMappingURL=main.4d769f11.chunk.js.map
