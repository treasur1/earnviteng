import {j as e, r as a} from "./index-Lh9nIS-G.js";
import {c as l, g as c} from "./whatsapp.functions-DqFEhdWO.js";
const i = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , o = l("circle-check", i);
function d() {
    return e.jsxs("footer", {
        className: "mt-10 text-center text-xs text-muted-foreground space-y-1",
        children: [e.jsx("p", {
            children: "© 2026 High Posting Jobs. All rights reserved."
        }), e.jsx("p", {
            className: "opacity-70",
            children: "Trusted by thousands · Free to join · "
        })]
    })
}
function h() {
    const [r,s] = a.useState("#");
    a.useEffect( () => {
        c().then(t => s(t.url || "#")).catch( () => s("#"))
    }
    , []);
    const n = ["An internet-connected smartphone, tablet or laptop", "1–2 hours a day", "A spirit of implementation and dedication"];
    return e.jsx("main", {
        className: "min-h-screen bg-app-gradient flex flex-col items-center justify-center px-4 py-8 sm:py-14",
        children: e.jsxs("div", {
            className: "w-full max-w-xl",
            children: [e.jsxs("article", {
                className: "bg-card rounded-3xl shadow-card p-6 sm:p-10 animate-float-in",
                style: {
                    animationDelay: "0.05s"
                },
                children: [e.jsxs("header", {
                    className: "text-center space-y-2",
                    children: [e.jsx("p", {
                        className: "text-base sm:text-lg font-semibold text-foreground",
                        children: "In order to"
                    }), e.jsx("h1", {
                        className: "text-3xl sm:text-4xl font-extrabold leading-tight text-brand-red",
                        children: "Start Earning Good Money With High Digital Skills…"
                    })]
                }), e.jsx("div", {
                    className: "mt-7 sm:mt-9 text-center",
                    children: e.jsx("h2", {
                        className: "inline-block text-lg sm:text-xl font-bold text-foreground border-b-2 border-foreground/80 pb-1",
                        children: "You Will Need These 3 Things"
                    })
                }), e.jsx("ul", {
                    className: "mt-6 space-y-4",
                    children: n.map(t => e.jsxs("li", {
                        className: "flex items-start gap-3",
                        children: [e.jsx(o, {
                            className: "h-6 w-6 text-success shrink-0 mt-0.5"
                        }), e.jsx("span", {
                            className: "text-base sm:text-lg text-foreground/90 leading-relaxed",
                            children: t
                        })]
                    }, t))
                }), e.jsx("div", {
                    className: "mt-7 rounded-2xl border-l-4 border-success bg-success-soft/50 p-4 sm:p-5",
                    children: e.jsxs("p", {
                        className: "text-sm sm:text-base text-foreground/90 leading-relaxed",
                        children: [e.jsx("span", {
                            className: "mr-1",
                            children: "✅"
                        }), e.jsx("strong", {
                            children: "YES!"
                        }), " I have these 3 things and I am ready to apply this life-changing information once it is in my hands."]
                    })
                }), e.jsx("a", {
                    href: r,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "cta-glow animate-pulse-glow mt-7 flex items-center justify-center gap-2 w-full rounded-2xl py-4 sm:py-5 text-primary-foreground font-bold text-base sm:text-lg tracking-wide uppercase",
                    children: "CLICK HERE TO JOIN"
                })]
            }), e.jsx(d, {})]
        })
    })
}
export {h as component};
