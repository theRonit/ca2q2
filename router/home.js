module.exports=function(app,arr)
{
    app.get('/',function(req,res)
    {
        res.render('home.html');
    });


    app.get('/chat',function(req,res)
    {
        res.render('chat.html');
    });

    app.get('/contact',function(req,res)
    {
        res.render('contact.html');
    });

    app.post('/',function(req,res)
    {
        //res.send(req.body.message);
        var j={'name':req.body.name, 'email': req.body.email};
        arr.push(j);
        console.log(arr.length);

        res.render('showform.html',{arr:arr});
    });
    
}