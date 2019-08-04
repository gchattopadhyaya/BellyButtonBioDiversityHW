# BellyButtonBioDiversityHW
1. Navigate to app.py under StarterCodeBelly_Button_Biodiversity
2. Run python app.py
3. Copy the Local Host URL on a Chrome Browser to see the output.
4. Heroku Deployment was done however getting following error:

(belly_button_env) LP-GCHATTO2-OSX:BellyButtonBioDiversity gchattopadhyaya$ git push heroku master
Enumerating objects: 30, done.
Counting objects: 100% (30/30), done.
Delta compression using up to 8 threads
Compressing objects: 100% (27/27), done.
Writing objects: 100% (30/30), 1.16 MiB | 1.12 MiB/s, done.
Total 30 (delta 4), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote:  !     No default language could be detected for this app.
remote: 			HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote: 			See https://devcenter.heroku.com/articles/buildpacks
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to belly-button-ucsd.
remote: 
To https://git.heroku.com/belly-button-ucsd.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/belly-button-ucsd.git'
(belly_button_env) LP-GCHATTO2-OSX:BellyButtonBioDiversity gchattopadhyaya$ heroku git:remote -a belly-button-ucsd
 ›   Warning: heroku update available from 7.22.9 to 7.27.1.
set git remote heroku to https://git.heroku.com/belly-button-ucsd.git
(belly_button_env) LP-GCHATTO2-OSX:BellyButtonBioDiversity gchattopadhyaya$ git push heroku master
Enumerating objects: 30, done.
Counting objects: 100% (30/30), done.
Delta compression using up to 8 threads
Compressing objects: 100% (27/27), done.
Writing objects: 100% (30/30), 1.16 MiB | 1.09 MiB/s, done.
Total 30 (delta 4), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote:  !     No default language could be detected for this app.
remote: 			HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
remote: 			See https://devcenter.heroku.com/articles/buildpacks
remote: 
remote:  !     Push failed
remote: Verifying deploy...
remote: 
remote: !	Push rejected to belly-button-ucsd.
remote: 
To https://git.heroku.com/belly-button-ucsd.git
 ! [remote rejected] master -> master (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/belly-button-ucsd.git'
(belly_button_env) LP-GCHATTO2-OSX:BellyButtonBioDiversity gchattopadhyaya$ 
