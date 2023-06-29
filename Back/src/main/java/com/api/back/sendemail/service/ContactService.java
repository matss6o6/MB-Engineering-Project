package com.api.back.sendemail.service;
import com.api.back.sendemail.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class ContactService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendNotification(Contact contact) throws MailException{
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setFrom("apishopmatit@gmail.com");
        mail.setTo("apishopmatit@gmail.com");
        mail.setSubject(contact.getMessageTitle());
        mail.setText("Email: " + contact.getUserMailAddress() + "\nWiadomość:" +contact.getDescription() + "\nImię: " +contact.getNameusername());
        javaMailSender.send(mail);
    }

}