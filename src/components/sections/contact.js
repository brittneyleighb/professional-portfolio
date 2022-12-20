<!DOCTYPE html>
<html lang="en">
    <head>
        <style>


/* Base */
    *
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body
{
    padding-top: 20px;
    margin-top: 50px;
    background-color: #0a192f;
    font-family: 'Overpass Mono', monospace;
    color: #F5F5F8;
}

a
{
    text-decoration: none;
    color: #e6f1ff;
}

a:hover
{
    color: #64ffda;
}

.hide
{
    display: none;
}

/* Main */
main
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
}

.title
{
    font-size: 50px;
    font-weight: bold;
    padding: 1.5% 0;
}

.title-info
{
	padding-bottom: 2%;
}

.form
{
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 2%;
}

.input-group, .textarea-group
{
    padding: 1% 0;
}

input, textarea
{
    color: inherit;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #757575;
    padding: 1.5%;
    font-size: 20px;
}

input:focus, textarea:focus
{
    background-color: transparent;
    outline: transparent;
    border-bottom: 2px solid #64ffda;
}

input::placeholder, textarea::placeholder
{
    color: transparent;
}

label
{
    color: #c7c3c3;
    position: relative;
    left: 0.5em;
    top: -2em;
	cursor: auto;
    transition: 0.3s ease all;
}

input:focus ~ label, input:not(:placeholder-shown) ~ label
{
    top: -4em;
    color: #64ffda;
    font-size: 15px;
}

textarea:focus ~ label, textarea:not(:placeholder-shown) ~ label
{
    top: -10.5em;
    color: #64ffda;
    font-size: 15px;
}

.button-div
{
    display: flex;
    justify-content: center;
}

button
{
    padding: 2%;
    width: 50%;
    border: 1px solid;
    border-color: #212121;
    border-radius: 5px;
    font-family: inherit;
    font-size: 18px;
    background-color: black;
    color: inherit;
    box-shadow: 0 0 10px #212121;
}

button:hover
{
    background-color: #424242;
    color: #64ffda;
    cursor: pointer;
}


/* Main */

main
{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: auto;
}

.title
{
    font-size: 50px;
    font-weight: bold;
    padding: 1.5% 0;
}

.title-info
{
	padding-bottom: 2%;
}

.form
{
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 2%;
}

.input-group, .textarea-group
{
    padding: 1% 0;
}

input, textarea
{
    color: inherit;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccd6f6;
    padding: 1.5%;
    font-size: 20px;
}

input:focus, textarea:focus
{
    background-color: transparent;
    outline: transparent;
    border-bottom: 2px solid #64ffda;
}

input::placeholder, textarea::placeholder
{
    color: transparent;
}

label
{
    color: #ccd6f6;
    position: relative;
    left: 0.5em;
    top: -2em;
	cursor: auto;
    transition: 0.3s ease all;
}

input:focus ~ label, input:not(:placeholder-shown) ~ label
{
    top: -4em;
    color: #ccd6f6;
    font-size: 15px;
}

textarea:focus ~ label, textarea:not(:placeholder-shown) ~ label
{
    top: -10.5em;
    color: ##ccd6f6;
    font-size: 15px;
}

.button-div
{
    display: flex;
    justify-content: center;
}

button
{
    padding: 2%;
    width: 50%;
    border: 1px solid;
    border-color: #ccd6f6;
    border-radius: 5px;
    font-family: inherit;
    font-size: 18px;
    background-color: #112240;
    color: inherit;
    box-shadow: 0 0 10px #ccd6f6;
}

button:hover
{
    background-color: #424242;
    color: #64ffda;
    cursor: pointer;
}


/* Media queries */

@media screen and (max-width: 1200px)
{
    .form
    {
        width: 70%;
    }
}

@media screen and (max-width: 680px)
{
    .form
    {
		width: 90%;
    }
}

@media screen and (max-width: 500px)
{
	.title
	{
		font-size: 40px;
		padding-top: 6%;
	}

	.title-info
	{
		font-size: 13px;
        color: #64ffda;
	}
	
	.form
	{
		padding: 6% 4%;
		padding-top: 15%;
	}

	.input-group, .textarea-group
    {
		padding: 3% 0;
	}
	
	input, textarea
	{
		font-size: 15px;
	}

	input:focus ~ label, input:not(:placeholder-shown) ~ label
	{
		top: -3.5em;
		left: 0.1em;
	}
	
	textarea:focus ~ label, textarea:not(:placeholder-shown) ~ label
	{
		top: -8.5em;
		left: 0.2em;
    }
    
    button
    {
        font-size: 15px;
    }
    
}
</style>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="Brittney Banning Portfolio">
        <meta name="description" content="Contact page for Brittney Banning">
        <meta name="author" content="Brittney Banning">

        <link href="https://fonts.googleapis.com/css2?family=Overpass+Mono&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./static/css/base.css">
        <link rel="stylesheet" href="./static/css/navbar.css">
        <link rel="stylesheet" href="./static/css/main.css">
        <link rel="stylesheet" href="./static/css/footer.css">

        <title>Britt's Portfolio</title>
    </head>

    <body>

        <main>
            <div class="title">Contact Me</div>
            <div class="title-info">Let's collaborate!</div>

            <form action="https://formsubmit.co/brittneyleigh@tutanota.com" method="POST">
                <div class="input-group">
                    <input type="text" name="first_name" id="first-name" placeholder="First name">
                    <label for="first-name">First name</label>
                </div>
                
                <div class="input-group">
                    <input type="text" name="last_name" id="last-name" placeholder="Last Name">
                    <label for="last-name">Last name</label>
                </div>

                <div class="input-group">
                    <input type="email" name="e-mail" id="e-mail" placeholder="E-mail">
                    <label for="e-mail">E-mail</label>
                </div>

                <div class="textarea-group">
                    <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
                    <form method="POST" action="form.php" id="contact-form">
                    <input type="hidden" name="_url" value="https://brittsportfolio.com/contact.php">
                    <label for="message">Message</label>
                </div>

                <div class="button-div">
                    <button type="submit">Send</button>
                </div>
            </form>
        </main>
    </body>
</html>
