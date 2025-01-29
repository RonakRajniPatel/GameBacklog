package com.ronakrajnipatel.game_backlog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.ronakrajnipatel.game_backlog;")
public class GameBacklogApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(GameBacklogApplication.class, args);
	}
}
