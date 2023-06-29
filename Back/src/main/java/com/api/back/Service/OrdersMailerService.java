package com.api.back.Service;

import com.api.back.dto.AddOrderDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.StringJoiner;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class OrdersMailerService {

    @Value("${spring.mail.username}")
    private String email;

    @Value("${bank.number}")
    private String bankNumber;

    private final JavaMailSender javaMailSender;

    private final String SUBJECT = "Zamówienie numer %s.";
    private final String SECOUND_SUBJECT = "Użytkowniku %s oto twoje zamówienie: <br>";
    private final String ITEM_MESSAGE = "%d. <b>Nazwa przedmiotu: </b> %s, <b>cena za sztukę: </b> %.2f zł,<b> ilość sztuk: </b> %d ,<b>suma: </b>%.2f zł. <br>";
    private final String SUMMARY_SPACER = "----------------------------------------------------------------------------------------- <br>";
    private final String SUMMARY = "<b> Całkowity koszt zamówienia to: </b> %.2f zł. <br>";
    private final String DETILS = "Kwotę należy wpłacić na konto o numerze %s w tytule podając numer zamówienia.";

    public OrdersMailerService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendOdrderToCustomer(AddOrderDto addOrderDto, String numer_zamowienia) {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setSubject(String.format(SUBJECT, numer_zamowienia));
            helper.setFrom(email);
            helper.setTo(addOrderDto.getEmail());
            helper.setText(createMessage(addOrderDto),true);
            javaMailSender.send(message);
        } catch (MessagingException ex) {
            throw new IllegalStateException(ex.getMessage());
        }
    }

    private String createMessage(AddOrderDto addOrderDto){
        StringBuilder message = new StringBuilder();
        message.append(String.format(SECOUND_SUBJECT, addOrderDto.getNameAndSurname()));
        AtomicInteger i = new AtomicInteger(1);
        addOrderDto.getItems().forEach(item ->
            message.append(String.format(
                    ITEM_MESSAGE,
                    i.getAndIncrement(),
                    item.getName(),
                    item.getPrice(),
                    item.getQuantity(),
                    item.getPrice() * item.getQuantity()))
        );
        Double sum = addOrderDto.getItems()
                .stream()
                .map(item -> item.getQuantity()*item.getPrice())
                .mapToDouble(d->d)
                .sum();
        message.append(SUMMARY_SPACER);
        message.append(String.format(SUMMARY, sum));
        message.append(String.format(DETILS,bankNumber));
        return message.toString();
    }
}
