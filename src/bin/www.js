import app from '../index';


const port = process.env.PORT || 6520;

app.listen(port, () => {
    console.log(
        `app listening on ${process.env.PORT ? process.env.PORT : port} ${process.env ? process.env : 'NO'}!`
    );
});
