package com.example.demo.controllers.pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pages/page2")
public class Page2Controller {
	@GetMapping
	public String index() {
		return "/pages/page2";
	}
}
