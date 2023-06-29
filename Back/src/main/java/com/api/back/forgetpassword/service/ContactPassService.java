package com.api.back.forgetpassword.service;
import com.api.back.forgetpassword.ContactPass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactPassService {

    @Autowired
    private JavaMailSender javaMailSender;


    public void sendPass(ContactPass contactPass) throws MailException{
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom("apishopmatit@gmail.com");
        mail.setTo("apishopmatit@gmail.com");
        mail.setSubject("HELP NEEDED!  "+"Uzytkownik: "+contactPass.getLogin()+" zapomnial swoje haslo");
        mail.setText("\n TASKS!!!"+"\nUzytkownik zapomnial hasla, pomoz mu je odzyskac"+"\nLogin uzytkownika: "+contactPass.getLogin()+
                "\nNazwisko Matki( W celu weryfikacji uzytkownika): "+contactPass.getMothername()+
                "\nE-mail uzytkownika: "+contactPass.getEmail());
        javaMailSender.send(mail);

    }
}
