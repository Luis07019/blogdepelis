var BloggerSection=function(m) {
    "use strict";
    function d(e,t,n,r) {
        let o=document.createElement("script"),i=`$ {
            e
        }
        /feeds/posts/$ {
            t?"default/-/"+t:"default"
        }
        ?alt=json-in-script&max-results=$ {
            r
        }
        &callback=$ {
            n
        }
        `;
        return o.src=i,o
    }
    function h(e,t,n,r) {
        return new Promise(o=> {
            const i=d(e,t,n,r);
            document.body.appendChild(i),window[n]=u=> {
                o(u.feed.entry||[])
            },
            i.remove()
        })
    }
    function b(e) {
        let t= {
        };
        const n=/data-[\w-]+=[\"']+[^\"']+[\"']+/g,r=e.match(n);
        return!r||r.length==0? {
        }
        :(r.forEach(o=> {
            const i=o.match(/[\"'].+[\"']/)[0].replace(/\"|\'/g,""),c=o.match(/data-.+=/g)[0].replace(/data-|=/g,"").replace(/-\w+/g,function(u) {
                const s=u.replace("-","");
                return s[0].toUpperCase()+s.slice(1)
            });
            t[c]=i
        }),
        t)
    }
    function w(e) {
        return e.replace(/<[^>]*>?/g,"")
    }
    function y(e) {
        const t=e.id.$t.match(/post-\d {
            1,
        }
        /g);
        return t?t[0].replace("post-",""):""
    }
    function E(e) {
        const t=e.id.$t.match(/blog-\d {
            1,
        }
        /g);
        return t?t[0].replace("blog-",""):""
    }
    function v(e) {
        return e.title?e.title.$t:"No title"
    }
    function g(e) {
        return e.content?e.content.$t:e.summary?e.summary.$t:""
    }
    function I(e) {
        let t="";
        return e.link.forEach(n=> {
            n.rel=="alternate"&&(t=n.href)
        }),
        t
    }
    function T(e,t) {
        const n=w(e);
        return n.length>t?n.substr(0,t)+"...":n
    }
    function $(e,t) {
        let n=document.createElement("div");
        n.innerHTML=e;
        let r=n.querySelector("img");
        return r?r.src:t
    }
    function k(e,t) {
        return e.media$thumbnail?e.media$thumbnail.url:t
    }
    function D(e) {
        return {
            authorName:e.name?e.name.$t:"Unknown",authorUri:e.uri?e.uri.$t:"#noProfileUrl"
        }
    }
    function M(e) {
        return {
            datePost:e.published?new Date(e.published.$t).toLocaleDateString():"",postUpdate:e.updated?new Date(e.updated.$t).toLocaleDateString():"",datePostIso8601:e.updated.$t??e.published.$t
        }
    }
    function S(e) {
        return e.category?e.category.map(t=>t.term):[]
    }
    function A(e,t) {
        const n=g(e),r=$(n,t.defaultImage||"#noImageFounded");
        return {
            title:v(e),url:I(e),postID:y(e),blogID:E(e),image:r,thumbnail:k(e,r),body:g(e),summary:T(n,t.summary||96),labels:S(e),...D(e),...M(e),...b(n)
        }
    }
    function x(e,t) {
        return e.replace(/\ {
            (\w+)\
        }
        /g,function(n) {
            const r=n.replace(/\ {
                |\
            }
            /g,"");
            return t[r]||""
        })
    }
    function L(e,t) {
        return e.replace(/ {
            if(\.\w+\s)[^]*?\/
        }
        /g,function(n) {
            const r=n.match(/if.\w+/)[0].replace("if.","");
            return t[r]?n.replace(/ {
                if.\w+|\/\
            }
            /g,""):""
        })
    }
    function P(e,t) {
        return e.replace(/ {
            else(\.\w+\s)[^]*?\/
        }
        /g,function(n) {
            const r=n.match(/else.\w+/)[0].replace("else.","");
            return t[r]?"":n.replace(/ {
                else.\w+|\/\
            }
            /g,"")
        })
    }
    function _(e,t) {
        return e.replace(/\ {
            image(.+)\
        }
        /g,function(n) {
            const r=n.replace(/\ {
                image|\(|\)|\
            }
            /g,"");
            return t.thumbnail?t.thumbnail.replace(/s\B\d {
                2,4
            }
            (-?w\d {
                2,4
            })
            ?-c/,r):""
        })
    }
    function N(e,t) {
        function n(o,i) {
            return i.some(c=>o.includes(c))
        }
        function r(o) {
            const i=o.replace(/\[(.+)\]/g,""),c=o.replace(/include|exclude|remove|\[|\]/g,"").split(",").map(u=>u.trim());
            return {
                action:i.trim(),params:c
            }
        }
        return e.replace(/ {
            loop\.(.+\s)[^]*?\/
        }
        /g,function(o) {
            let i="";
            const {
                action:c,params:u
            }
            =/\((.+)\)/.test(o)?r(o.match(/\((.+)\)/)[1]): {
            },
            s=o.match(/loop.\w+/)[0].replace("loop.",""),p=o.replace(/ {
                loop\.(.+\s)|\/
            }
            /g,"");
            if(t[s]) {
                const f=t[s];
                return c=="remove"?f.filter(l=>!u.includes(l)).forEach((l,a)=> {
                    i+=p.replace(/@value/g,l).replace(/@index/g,a+1)
                })
                :c=="include"?f.filter(l=>n(l,u)).forEach((l,a)=> {
                    i+=p.replace(/@value/g,l).replace(/@index/g,a+1)
                })
                :c=="exclude"?f.filter(l=>!n(l,u)).forEach((l,a)=> {
                    i+=p.replace(/@value/g,l).replace(/@index/g,a+1)
                })
                :f.forEach((l,a)=> {
                    i+=p.replace(/@value/g,l).replace(/@index/g,a+1)
                }),
                i
            }
            else return""
        })
    }
    function R(e,t) {
        let n=x(e,t);
        return[L,P,N,_].forEach(o=> {
            n=o(n,t)
        }),
        n
    }
    function U(e,t) {
        e.forEach(n=> {
            let r=n.target;
            const o=r.querySelector(".bs-container");
            if(!o)return;
            const {
                innerHTML:i
            }
            =r.querySelector(".bs-render");
            if(n.isIntersecting) {
                const c= {
                    ...r.dataset
                };
                h(c.homeUrl||window.location.protocol+"//"+window.location.hostname,c.label??"","bsFn"+(r.index+1),c.results??8).then(u=> {
                    let s="";
                    r.querySelector(".bs-loader")&&(r.querySelector(".bs-loader").innerHTML=""),u.length>0?u.forEach(p=> {
                        const f=A(p,c);
                        s+=R(i.replace(/data-/g,""),f)
                    })
                    :s+=`<p class="bs-empty">$ {
                        c.empty||"No posts founded"
                    }
                    </p>`,o.innerHTML=s,typeof window[c.hook]=="function"&&c.hook&&window[c.hook].call(this,r,o,c)
                }),
                t.unobserve(r)
            }
        })
    }
    function q() {
        const e=document.querySelectorAll(".bs-wrapper");
        if(e.length==0) {
            console.warn("Warning: The node elements is not founded, please check if the node element passing as parameter exist en your HTML document");
            return
        }
        let t=new IntersectionObserver(U, {
            threshold:.3,rootMargin:"200px"
        });
        e.forEach((n,r)=> {
            n.index=r,t.observe(n)
        })
    }
    return m.init=q,m
}
( {
});
