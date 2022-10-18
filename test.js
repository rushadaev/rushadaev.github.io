
	let viewportWidth = window.innerWidth;
	let mobile = viewportWidth <= 790;
	const headElem = document.querySelector("#comp-l8vw5gr95 h1");
			const buttonsElem = document.getElementById("comp-l8vw5gr75");
			const pagesElem = document.querySelector("#comp-l8vw5gr6 h1");
			let tupe = {
				ЭД: 0,
				ПН: 0,
				НН: 0,
				СИО: 0,
				ДС: 0,
				НО: 0,
				ЗН: 0,
				У: 0,
				СДНЯ: 0,
				ПП: 0,
				С: 0,
				ПЭ: 0,
				ЖС: 0,
				ПГ: 0,
				НС: 0,
				ПО: 0,
				НП: 0,
				ПК: 0,
			};

			//Класс, который представляет сам тест
			class Quiz
			{
				constructor(type, questions, results)
				{
					//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
					this.type = type;

					//Массив с вопросами
					this.questions = questions;

					//Массив с возможными результатами
					this.results = results;

					//Количество набранных очков
					this.score = 0;

					//Номер результата из массива
					this.result = 0;

					//Номер текущего вопроса
					this.current = 0;
				}

				Click(index)
				{
					//Добавляем очки
					let value = this.questions[this.current].Click(index);
					this.score += value;
					//
					
					tupe[quiz.questions[quiz.current].tupe]=tupe[quiz.questions[quiz.current].tupe]+value
					//console.log(tupe);
					//console.log(quiz.score);
					
					//
					let correct = -1;

					//Если было добавлено хотя одно очко, то считаем, что ответ верный
					if(value >= 1)
					{
						correct = index;
					}
					else
					{
						//Иначе ищем, какой ответ может быть правильным
						for(let i = 0; i < this.questions[this.current].answers.length; i++)
						{
							if(this.questions[this.current].answers[i].value >= 1)
							{
								correct = i;
								break;
							}
						}
					}

					this.Next();

					return correct;
				}

				//Переход к следующему вопросу
				Next()
				{
					this.current++;
					
					if(this.current >= this.questions.length) 
					{
						this.End();
					}
				}

				//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
				End()
				{
					for(let i = 0; i < this.results.length; i++)
					{
						if(this.results[i].Check(this.score))
						{
							this.result = i;
						}
					}
				}
			} 

			//Класс, представляющий вопрос
			class Question 
			{
				constructor(tupe, text, answers)
				{
					this.tupe = tupe; 
					this.text = text; 
					this.answers = answers; 
				}

				Click(index) 
				{
					return this.answers[index].value; 
				}
			}

			//Класс, представляющий ответ
			class Answer 
			{
				constructor(text, value) 
				{
					this.text = text; 
					this.value = value; 
				}
			}

			//Класс, представляющий результат
			class Result 
			{
				constructor(text, value)
				{
					this.text = text;
					this.value = value;
				}

				//Этот метод проверяет, достаточно ли очков набрал пользователь
				Check(value)
				{
					if(this.value <= value)
					{
						return true;
					}
					else 
					{
						return false;
					}
				}
			}

			//Массив с результатами
			let results = [
				new Result("Эмоциональная депривация (РСО),5", "ЭД"),
				new Result("Покинутость / нестабильность (РСО),5", "ПН"),
				new Result("Недоверие / насилие (РСО),5", "НН"),
				new Result("Социальная изоляция / отчуждение (РСО),5", "СИО"),
				new Result("Дефективность / стыд (РСО),5", "ДС"),
				new Result("Неуспешность / обреченность на неудачу (НЛАНД),5", "НО"),
				new Result("Зависимость / некомпетентность (НЛАНД),5", "ЗН"),
				new Result("Уязвимость (перед физическим вредом или болезнями) (НЛАНД),5", "У"),
				new Result("Слитность с другими / неразвитое Я (НЛАНД),5", "СДНЯ"),
				new Result("Покорность / подчинение (НД),5", "ПП"),
				new Result("Самопожертвование (НД),5", "С"),
				new Result("Подавление эмоций (СбП),5", "ПЭ"),
				new Result("Жёсткие стандарты / завышенные требования к себе (СбП),5", "ЖС"),
				new Result("Привилегированность / грандиозность (НГ),5", "ПГ"),
				new Result("Недостаток самоконтроля / самодисциплины (НГ)  ,5", "НС"),
				new Result("Поиск одобрения (НД),5", "ПО"),
				new Result("Негативизм / пессимизм (СбП),5", "НП"),
				new Result("Пунитивность / карательность (СбП),5", "ПК"),
			];

			let results_description = [
				{
					title: "ЭД",
					desctiption: `«Никто никогда не будет обо мне заботиться и поддерживать меня»<br/>

Люди с этой схемой считают, что их потребность в заботе, сочувствии и защите не может быть удовлетворена. Они ощущают одиночество и опустошение. И не важно, сколько окружающие дают, им всегда будет мало. 3 формы депривации:<br/>

депривация заботы: отсутствие или недостаток дружеских и любовных отношений, тепла<br/>

депривация эмпатии: отсутствие или недостаток разделения чувств с другими людьми, понимания<br/>

депривация защиты: отсутствие или недостаток поддержки и защиты со стороны окружающих`
				},
				{
					title: "ПН",
					desctiption: `«Близкие люди в любой момент покинут меня»<br/>

Человек с этой схемой находится в постоянной тревоге о том, что его оставят. Схема включает опасения, что близкие люди в какой-то момент прекратят оказывать эмоциональную поддержку, опеку и защиту, потому что они эмоционально непостоянны, ненадежны или не все время находятся рядом, либо потому что они неминуемо умрут или покинут вас ради кого-нибудь получше.`
				},
				{
					title: "НН",
					desctiption: `«Мной обязательно воспользуются»<br/>

Люди с этой схемой постоянно ожидают, что другие люди будут причинять им боль, унижать, обманывать и всячески использовать в своих целях. Они уверены в том, что при любых обстоятельствах окружающие намеренно причинят вред и от них можно ожидать чего-то плохого.`
				},
				{
					title: "СИО",
					desctiption: `«Я не такой, как остальные»<br/>

Схема заключается в чувстве изолированности от остального мира. Человек не чувствует себя частью общества, ему кажется, что он нигде не может быть принят, что он – отдельно ото всех.`
				},
				{
					title: "ДС",
					desctiption: `«Если они узнают меня ближе, то обязательно прекратят все отношения»<br/>

Человек с этой схемой ощущает себя дефективным, ущербным, недостаточно хорошим, ненужным, и нежеланным. Болезненно реагирует на любую критику, сравнивает себя с другими – не в свою пользу, конечно же. Стыдится ощущаемых им собственных дефектов. При этом недостатки зачастую совершенно не совпадают с реальностью.`
				},
				{
					title: "НО",
					desctiption: `«Я — бездарность»<br/>

Человек с данной схемой думает, что если он потерпел неудачу однажды, то и сейчас ничего добиться не сможет: сверстники с этими же задачами справляются значительно лучше, чем он.<br/>

Присутствует ощущение, что он – ниже по статусу, чем окружающие, менее успешный и способный в различных сферах деятельности (в школе, на работе, в спорте и т.д.). Обычно включает в себя убежденность в собственной глупости, некомпетентности, бездарности невежественности, и т.д.`
				},
				{
					title: "ЗН",
					desctiption: `«Я не смогу ничего добиться»<br/>

Схема связана с уверенностью в собственной некомпетентности. Человек верит, что не может сам позаботиться о себе, взять ответственность. А если и попытается это сделать, то его непременно будет ждать провал. Его преследуют беспомощность, тревога и напряженность.`
				},
				{
					title: "У",
					desctiption: `«Мир очень опасен»<br/>

Человек с этой схемой уверен, что в любой момент может произойти какая-то катастрофа, и он не сможет ничего предпринять в сложившейся ситуации. Тревогу вызывают три группы событий:<br/>

Медицинские катастрофы: например, инсульт, рак, сердечный приступ<br/>

Эмоциональные катастрофы: например, страх потерять рассудок<br/>

Внешние катастрофы: например, землетрясение или авиакатастрофа`
				},
				{
					title: "СДНЯ",
					desctiption: `«Я не смогу без тебя жить!»<br/>

Люди с этой схемой чересчур погружены в отношения с близкими людьми, из-за чего не понимают, кто они сами и чего хотят. В итоге человек чувствует спутанность, пустоту, а также у него могут отсутствовать собственные жизненные цели.`
				},
				{
					title: "ПП",
					desctiption: `«Чтобы всё было хорошо, нужно слушаться других»<br/>

Человек с данной схемой подчиняется другим людям и ориентируется на их желания с целью избежать агрессии или гнева с их стороны. Схема существует в двух вариациях: подавление своих желаний и потребностей или подавление своих чувств и эмоций. Обычно люди с этой схемой считают собственные эмоции, чувства и потребности неважными и незначимыми для других людей и демонстрируют чрезмерную уступчивость.`
				},
				{
					title: "С",
					desctiption: `«Хотеть что-то для себя — это эгоизм»<br/>

Люди с этой схемой жертвуют своими желаниями и интересами в пользу других, слишком сильно фокусируются на том, чтобы удовлетворять потребности и желания других людей. Мысли о том, чтобы сделать что-то для себя, вызывают у них острые приступы вины. Часто встречается в форме “другие люди – слабые и беззащитные, значит нужно о них заботиться”. `
				},
				{
					title: "ПЭ",
					desctiption: `«Эмоции проявлять нельзя, особенно гнев»<br/>

Схема заключается в том, что человек подавляет любые свои спонтанные действия, чувства или коммуникации. Люди с этой схемой считают, что спонтанные или чересчур яркие эмоциональные проявления могут навредить окружающим людям или привести к потере авторитета и самоуважения. Сдерживание негативных эмоций часто приводит к сложностям в проявлении также и положительных чувств.`
				},
				{
					title: "ЖС",
					desctiption: `«Я делаю это недостаточно хорошо!»<br/>

У людей с этой схемой присутствует сильное стремление к очень высоким внутренним стандартам поведения с целью избежать критики. Обычно это приводит к ощущению давления и придирчивости по отношению к себе или другим. Также часто включает трудности в достижении удовольствия, расслабления и удовлетворения результатами своей деятельности. Обычно выражаются следующим образом: перфекционизм, чрезмерное внимание к деталям, ригидные и жесткие установки и правила во многих сферах жизни, погоня за совершенством.`
				},
				{
					title: "ПГ",
					desctiption: `«Пусть правила соблюдают другие, я буду делать, что хочу»</br>

Эта схема связана с уверенностью в своем превосходстве над другими людьми и обладании особыми правами и привилегиями. Человек с данной схемой уверен, что он может и должен получить всё, что хочет, независимо от того, причинит ли это боль или неудобство окружающим или нет. Он часто стремится к власти и контролю, доминированию над другими, не беспокоясь об их потребностях и чувствах.`
				},
				{
					title: "НС",
					desctiption: `«Мне сложно снова взяться за дело, если я потерпел(а) неудачу»<br/>

Эта схема провоцирует сложности с выполнением рутинных задач, импульсивность и чрезмерное избегание дискомфорта. Людям с этой схемой сложно выполнять повседневные обязанности и справляться с любыми ограничениями - недостаток самоконтроля и самодисциплины может мешать им в достижении их целей.`				
},
				{
					title: "ПО",
					desctiption: `«Может, теперь я достаточно хорош(а)?»<br/>

Людям с этой схемой часто свойственно сильное стремление к получению одобрения, признания или внимания от других людей. Их самооценка сильно зависит от реакций других людей, а не от собственных ощущений. Иногда данная схема включает чрезмерную заботу о своем социальном положении, внешности, финансах или достижениях.`
				},
				{
					title: "НП",
					desctiption: `«В жизни ничего хорошего быть не может»<br/>

Человек с этой схемой часто не замечает положительных сторон жизни, концентрируясь исключительно на негативе. Он уверен, что при любых обстоятельствах ситуация развернется в худшую сторону из всех возможных. Также может включать чрезмерный страх совершить ошибку, которая приведет к разорению, унижению, попаданию в неприятную ситуацию и т.д. Часто данная схема провоцирует повышенную тревожность, бдительность и нерешительность.`
				},
				{
					title: "ПК",
					desctiption: `«Каждая ошибка требует наказания!»<br/>

Эта схема характеризуется нетерпимостью по отношению к себе или к другим. Человек с этой схемой  уверен, что люди заслуживают наказания за свои ошибки, ему свойственны сверхтребовательность, критичность, трудности в прощении ошибок, отсутствие сопереживания и непринятие факта человеческого несовершенства.`
				}
			];
			
			//Массив с вопросами
						
			let object  = {
				"Рядом со мной не было человека, который бы обо мне заботился, проявлял участие и искренний интерес ко всему, что происходило со мной": "ЭД",
				"Я «цепляюсь» за близких мне людей, так как боюсь, что они меня покинут": "ПН",
				"Мне кажется, что другие люди меня используют": "НН",
				"Я не вписываюсь ни в одну из компаний": "СИО",
				"Ни один человек, к которому я испытываю влечение, не мог бы полюбить меня, если бы узнал о моих недостатках": "ДС",
				"Почти всё, что я делаю на работе (в учебе) не так хорошо, как это могли бы сделать другие люди": "НО",
				"Думаю, что я не способен самостоятельно справляться с повседневными делами": "ЗН",
				"Я не могу избавиться от ощущения, что должно случиться что-то плохое": "У",
				"Я не смог «отделиться» от своих родителей в той мере, в какой это сделали мои сверстники": "СДНЯ",
				"Я думаю, что если я буду делать только то, что мне хочется, это непременно приведет к неприятностям": "ПП",
				"В конце концов, именно мне приходится заботиться о моих близких": "С",
				"Я слишком застенчив, чтобы проявлять свою симпатию (внимание или привязанность) к другим людям": "ПЭ",
				"Я должен быть лучшим во всем, что я делаю, и не могу быть хуже других": "ЖС",
				"Мне очень трудно принять «нет» в качестве ответа, если я чего-нибудь хочу от других людей": "ПГ",
				"Я не могу заставить себя выполнять рутинные или скучные задания": "НС",
				"Знакомство с важными людьми и наличие денег дают мне ощущение собственной значимости": "ПО",
				"Даже когда дела идут хорошо, у меня такое ощущение, что это ненадолго": "НП",
				"Если я допущу ошибку, то должен быть наказан": "ПК",
				"Я не знаю таких людей, которые давали бы мне тепло, любовь и заботу": "ЭД",
				"Я так сильно нуждаюсь в других людях, что боюсь их потерять": "ПН",
				"Я чувствую, что не могу ослабить свою защиту и вести себя естественно в присутствии других людей, так как они могут причинить мне боль": "НН",
				"Я очень сильно отличаюсь от других людей": "СИО",
				"Никто, о ком я мечтаю, не захотел бы остаться рядом со мной, если бы узнал, какой я на самом деле": "ДС",
				"Я неспособен добиться успеха": "НО",
				"В повседневной жизни я во многом завишу от других людей": "ЗН",
				"Я полагаю, что в любой момент может произойти нечто ужасное (природная катастрофа, преступление, финансовый кризис или несчастный случай)": "У",
				"Я и мои родители склонны (были склонны) принимать излишнее участие в жизни и решении проблем друг друга": "СДНЯ",
				"Я чувствую, что я должен уступать желаниям других людей, иначе они могут отвергнуть меня или как-то отомстить": "ПП",
				"Я - хороший человек, так как думаю о других больше, чем о себе": "С",
				"Мне неловко показывать другим свои чувства": "ПЭ",
				"Я стараюсь делать все как можно лучше и не приемлю, когда говорят «…и так уже достаточно хорошо…»": "ЖС",
				"Я особенный человек и не обязан подчиняться многим ограничениям, установленным для других людей": "ПГ",
				"Если мне не удается достичь цели, я легко отчаиваюсь и сдаюсь": "НС",
				"Достижения имеют для меня наибольшую ценность, если их замечают другие люди": "ПО",
				"Когда случается что-то хорошее, я жду, что должно случиться что-то плохое": "НП",
				"Если я не буду стараться изо всех сил, то у меня обязательно будут неприятности": "ПК",
				"Я никогда не чувствовал, что я был кем-то особенным для другого человека": "ЭД",
				"Я опасаюсь, что мои близкие покинут или «бросят» меня": "ПН",
				"Думаю, что рано или поздно, кто-нибудь меня обязательно предаст": "НН",
				"Я – одиночка, и не принадлежу ни к какому «кругу»": "СИО",
				"Я недостоин любви, внимания или уважения других людей": "ДС",
				"Большинство людей достигают лучших результатов в работе, чем я": "НО",
				"Мне не хватает здравого смысла": "ЗН",
				"Я боюсь, что на меня могут напасть": "У",
				"Мне всегда было очень трудно скрывать от родителей подробности личной жизни, не испытывая при этом чувства вины": "СДНЯ",
				"В отношениях с другими людьми я легко соглашаюсь быть на вторых ролях": "ПП",
				"Я так занят делами моих близких, что у меня не остается времени для себя": "С",
				"Мне трудно быть раскованным и непосредственным с другими людьми": "ПЭ",
				"Я должен выполнять все свои обязательства": "ЖС",
				"Я терпеть не могу, когда меня ограничивают или не дают делать то, что я хочу": "ПГ",
				"Мне очень трудно отказывать себе в удовлетворении сиюминутных желаний ради достижения отдаленной цели": "НС",
				"Когда я не получаю повышенного внимания, я чувствую себя недостаточно значимым человеком": "ПО",
				"Невозможно всё предусмотреть - что-нибудь обязательно пойдёт не так": "НП",
				"Если я не сделаю какую-либо работу как следует, то должен буду отвечать за последствия": "ПК",
				"У меня никогда не было человека, который бы по-настоящему выслушивал и понимал меня или интересовался моими истинными потребностями и чувствами": "ЭД",
				"Когда я чувствую, что близкий человек отдаляется или уходит от меня, я впадаю в отчаяние": "ПН",
				"Я очень подозрительно отношусь к тому, какими мотивами руководствуются другие люди": "НН",
				"Я чувствую себя отчужденным или изолированным от других людей": "СИО",
				"Мне кажется, что меня нельзя полюбить": "ДС",
				"В работе я не так талантлив, как большинство других людей": "НО",
				"В житейских ситуациях на мое мнение нельзя полагаться": "ЗН",
				"Я боюсь, что потеряю все деньги или останусь без средств к существованию": "У",
				"Я чувствую, что живу не собственной жизнью, а так, как хотели бы от меня мои родители": "СДНЯ",
				"Так как решения за меня всегда принимали другие, то теперь я сам не знаю, чего хочу на самом деле": "ПП",
				"Мне всегда приходится выслушивать проблемы других людей": "С",
				"Я так сильно контролирую себя, что меня считают неэмоциональным или бесчувственным": "ПЭ",
				"Я постоянно испытываю давление от того, что нужно что-то сделать или чего-то достичь": "ЖС",
				"Считаю, что я не должен следовать общепринятым правилам и договоренностям, как это делают другие люди": "ПГ",
				"Я не могу заставить себя делать то, что мне не нравится, даже если я знаю, что это нужно для моего же блага": "НС",
				"Если меня знакомят с новой компанией или я кому-нибудь что-то рассказываю, то для меня очень важно получить признание и восхищение": "ПО",
				"Независимо от того, насколько усердно я работаю, меня беспокоит, что я могу лишиться денежных средств и остаться ни с чем": "НП",
				"Не имеет значения, почему я сделал ошибку - если я сделаю что-то не так, то мне придётся за это расплачиваться": "ПК",
				"В моей жизни не было такого человека, который мог бы дать мне хороший совет или направить меня, когда я не знал, как поступить": "ЭД",
				"Иногда я так боюсь, что кто-то покинет меня, что сам первый начинаю отталкивать этого человека": "ПН",
				"Обычно я ищу скрытые мотивы у других людей": "НН",
				"Я чувствую себя посторонним в любой группе": "СИО",
				"У меня много неприемлемых качеств, из-за которых я не могу открываться перед другими людьми или позволять им узнавать меня получше": "ДС",
				"В том, что касается работы или учебы, я не такой сообразительный как большинство других людей": "НО",
				"Я не уверен в своей способности справляться с повседневными проблемами, которые постоянно возникают": "ЗН",
				"Я беспокоюсь, что у меня развивается тяжелое заболевание, хотя врачи не обнаруживают ничего серьезного": "У",
				"Я не чувствую себя целостной личностью отдельно от личности моего партнера или кого-то из родителей": "СДНЯ",
				"Мне очень трудно требовать от других, чтобы они уважали мои права и считались с моими чувствами": "ПП",
				"Люди считают, что я делаю слишком много для других и недостаточно для себя": "С",
				"Меня считают эмоционально зажатым и напряженным": "ПЭ",
				"Мне трудно снять с себя ответственность за что-либо или дать себе право на ошибку": "ЖС",
				"То, что я предлагаю и делаю, является более ценным, чем вклад других людей": "ПГ",
				"Мне редко удаётся сдерживать обещания, которые я даю самому себе": "НС",
				"Я чувствую себя по-настоящему ценным человеком, когда меня хвалят или осыпают комплиментами": "ПО",
				"Я боюсь, что любое неправильное решение может привести к катастрофе": "НП",
				"Я плохой человек, который заслуживает наказания": "ПК",
			}
			
			
			const questions=[];
			for (let property in object) {
			  var a=property
			  var b=object[property]
			  //console.log(a) //имя свойства
			  //console.log(b) //значение свойства
			  question=new Question(b, a, 
			[
				new Answer("Абсолютно не соответствует ", 1),
				new Answer("По большей части не соответствует", 2),
				new Answer("Скорее соответствует, чем нет", 3),
				new Answer("В общем, соответствует", 4),
				new Answer("По большей части соотвествует", 5),
				new Answer("Полностью соответствует", 6)
			])
			questions.push(question);
			}

			//Сам тест
			const quiz = new Quiz(2, questions, results);

			Update();

			//Обновление теста
			function Update()
			{
				//Проверяем, есть ли ещё вопросы
				if(quiz.current < quiz.questions.length) 
				{
					//Если есть, меняем вопрос в заголовке
					headElem.innerHTML = quiz.questions[quiz.current].text;
					
					//Удаляем старые варианты ответов
					buttonsElem.innerHTML = "";

					//Создаём кнопки для новых вариантов ответов
					for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
					{
						let btn = document.createElement("button");
						btn.className = "button";

						btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

						btn.setAttribute("index", i);

						buttonsElem.appendChild(btn);
					}
					
					//Выводим номер текущего вопроса
					pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

					//Вызываем функцию, которая прикрепит события к новым кнопкам
					Init();
				}
				else
				{

					//Если это конец, то выводим результат
					buttonsElem.innerHTML = "";
					headElem.innerHTML = "";
					//pagesElem.innerHTML = "";
					
					var resultDiv=document.createElement("div");
					resultDiv.id = "downloadDiv"
					
					var newElem=document.createElement("table");
										
					var colors_all = "#453a35";
					var newRow=newElem.insertRow(0);
					var newCell = newRow.insertCell(0);
					newCell.width="200";
					newCell.innerHTML="Схема";
					newCell.style.color = "#FFFFFF";
					newCell.style.backgroundColor = colors_all;
					newCell.style.borderColor = colors_all;
					
					var newCell = newRow.insertCell(1);
					newCell.width="200";
					newCell.innerHTML="Тестовый показатель";
					newCell.style.color = "#FFFFFF";
					newCell.style.backgroundColor = colors_all;
					newCell.style.borderColor = colors_all;
					
					var newCell = newRow.insertCell(2);
					newCell.width="200";
					newCell.innerHTML="Уровень т/п";
					newCell.style.color = "#FFFFFF";
					newCell.style.backgroundColor = colors_all;
					newCell.style.borderColor = colors_all;
					console.log('results', results)
					console.log('tupe', tupe)

					let orderedTupe = Object.entries(tupe).sort((a,b) => b[1]-a[1]).map(el=>el[0]);

					results = results.sort((a, b) => orderedTupe.indexOf(a.value) - orderedTupe.indexOf(b.value));

					let result_array = [];
						for (var i = 0; i < Object.keys(tupe).length; i++) {
							var newRow=newElem.insertRow(i+1);
							srednee=(tupe[results[i].value]-5)/25*100;
							result_array.push(tupe[results[i].value] - 5);
							if (srednee<=20)
								{
								text = "низкий";
								color = "#FC9A40";
								}
							else if (srednee<=40)
								{
								text = "пониженный";
								color = "#9A76B3";
								}
							else if (srednee<=60)
								{
								text = "средний";
								color = "#8EA851";
								}
							else if (srednee<=80)
								{
								text = "повышенный";
								color = "#9A76B3";
								}
							else 
								{
								text = "высокий";
								color = "#756AB0";
								}

							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML=results[i].text.split(",")[0];
							newCell.style.borderColor = color;
							
							var newCell = newRow.insertCell(1);
							newCell.width="100";
							newCell.innerHTML=(srednee+"%");
							newCell.style.borderColor = color;
							
							var newCell = newRow.insertCell(2);
							newCell.width="200";
							newCell.innerHTML = text;
							newCell.style.borderColor = color;
						}
					let result_progress = [];
					//progress_bar
					for (var i = 0; i < Object.keys(tupe).length; i++) {
						let progress_item = document.createElement('div');
						progress_item.classList.add("progress_item");
						
						let progress_item__title = document.createElement('div');
						progress_item__title.classList.add("progress_item__title");
						progress_item__title.innerHTML = results[i].text.split(',')[0].split(' (')[0];
						progress_item.appendChild(progress_item__title)
						
						let progress_item__bar_outer = document.createElement('div');
						progress_item__bar_outer.classList.add("progress_item__bar_outer");
						progress_item.appendChild(progress_item__bar_outer)
						
						let progress_item__bar_inner = document.createElement('div');
						progress_item__bar_inner.classList.add("progress_item__bar_inner");
						progress_item__bar_inner.style.width = (result_array[i]/25)*100 + '%';
						
						progress_item__bar_outer.appendChild(progress_item__bar_inner)
						
						let progress_item__bar_value = document.createElement('div');
						progress_item__bar_value.classList.add("progress_item__bar_value");
						progress_item__bar_value.innerHTML = result_array[i] + ' / 25'
						progress_item__bar_inner.appendChild(progress_item__bar_value)

						let progress_item__description = document.createElement('div');
						progress_item__description.classList.add("progress_item__description");
						progress_item__description.innerHTML = results_description.filter(res => res.title == results[i].value)[0]['desctiption'];
						progress_item.appendChild(progress_item__description)
						
						result_progress.push(progress_item);
					}

					// resultDiv.appendChild(newElem);
					// document.getElementById('comp-l8vw5grk2').appendChild(resultDiv);
					
					
					var newElem=document.createElement("br");
					resultDiv.appendChild(newElem);
					
					var newElem=document.createElement("table");
					
					var newRow=newElem.insertRow(0);
					var newCell = newRow.insertCell(0);
					newCell.width="200";
					newCell.innerHTML="Группа схем";
					newCell.style.color = "#FFFFFF";
					newCell.style.backgroundColor = colors_all;
					newCell.style.borderColor = colors_all;
					var newCell = newRow.insertCell(1);
					newCell.width="200";
					newCell.innerHTML="Средний балл";
					newCell.style.color = "#FFFFFF";
					newCell.style.backgroundColor = colors_all;
					newCell.style.borderColor = colors_all;
					
						var newRow=newElem.insertRow(1);
							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML="Разобщенность и отвержение (РСО)";
					
							var newCell = newRow.insertCell(1);
							newCell.width="200";
							newCell.innerHTML=((tupe["ЭД"]+tupe["ПН"]+tupe["НН"]+tupe["СИО"]+tupe["ДС"])/5).toFixed(2);
					
						var newRow=newElem.insertRow(2);
							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML="Нарушение личностной автономии и непризнание достижений (НЛАНД)";
					
							var newCell = newRow.insertCell(1);
							newCell.width="200";
							newCell.innerHTML=((tupe["НО"]+tupe["ЗН"]+tupe["У"]+tupe["СДНЯ"])/4).toFixed(2);
					
						var newRow=newElem.insertRow(3);
							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML="Нарушенные границы (НГ)";
					
							var newCell = newRow.insertCell(1);
							newCell.width="200";
							newCell.innerHTML=((tupe["ПГ"]+tupe["НС"])/2).toFixed(2);
					
						var newRow=newElem.insertRow(4);
							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML="Направленность на других (НД)";
					
							var newCell = newRow.insertCell(1);
							newCell.width="200";
							newCell.innerHTML=((tupe["ПП"]+tupe["С"]+tupe["ПО"])/3).toFixed(2);
					
						var newRow=newElem.insertRow(5);
							var newCell = newRow.insertCell(0);
							newCell.width="200";
							newCell.innerHTML="Сверхбдительность и подавление (СбП)";
					
							var newCell = newRow.insertCell(1);
							newCell.width="200";
							newCell.innerHTML=((tupe["ПЭ"]+tupe["ЖС"]+tupe["НП"]+tupe["ПК"])/4).toFixed(2);
					
					// resultDiv.appendChild(newElem);
					// document.getElementById('comp-l8vw5grk2').appendChild(resultDiv);
					
					document.getElementById('comp-l8vw5gra8').style.display = 'grid';
					document.getElementById('comp-l8vw5gre4').style.display = 'grid';
					
					//Таблица результатов
					document.getElementById('comp-l8vw5grk2').style.display = 'grid';

					document.getElementById('comp-l8vw5gs012').style.display = 'grid';
					
					
					if(mobile)
					{
						document.getElementById('comp-l8vw5grg1').addEventListener("click", function (e) { saveDivImage('imagechart','Title') });
					}
					else{
						document.getElementById('comp-l8vw5grg1').addEventListener("click", function (e) { saveDiv('comp-l8vw5grk2','Title') });
					}

					//Скрыть тест
					document.getElementById('comp-l8vw5gqy5').style.display = 'none';
					
					//console.log(results)

					//chart
					const labels_old = [
						'Эмоциональная депривация /',
						'Покинутость / Нестабильность',
						'Недоверие / Насилие',
						'Социальная изоляция / Отчуждение',
						'Дефективность / Стыд',
						'Неуспешность / Обреченность на неудачу',
						'Зависимость / Некомпетентность',
						'Уязвимость /',
						'Слитность с другими / Неразвитое Я',
						'Покорность / Подчинение',
						'Самопожертвование /',
						'Подавление эмоций /',
						'Жёсткие стандарты / Завышенные требования к себе',
						'Привилегированность / Грандиозность',
						'Недостаток самоконтроля / Самодисциплины',
						'Поиск одобрения /',
						'Негативизм / Пессимизм',
						'Пунитивность / Карательность',
					  ];

					  let labels = results.map(result => result.text.split(',')[0].split(' (')[0]);

					  let colors = [
						"#cc0091",
						"#00d100",
						"#b97cff",
						"#76830d",
						"#0065df",
						"#ffc65e",
						"#1f156d",
						"#6b6400",
						"#004daf",
						"#710000",
						"#00b3ff",
						"#600026",
						"#00aed6",
						"#331500",
						"#ffabff",
						"#57474f",
						"#dde6ff",
						"#003986"
					];
					
					  const data = {
						labels: labels,
						datasets: [{
						  label: 'Значение',
						  backgroundColor: '#221C18',
						  borderColor: '#D3C196',
						  data: result_array,
						  fill: true,
						  pointBackgroundColor: function(context) {
							var index = context.dataIndex;
							var value = context.dataset.data[index];
							return colors[index];
						  },
						  tension: 0.3,
						  pointStyle: 'circle',
						  radius: 7,
						  hoverRadius: 7,
						}]
					  };
					  
						function done(){
							var url=myChart.toBase64Image();
							if(mobile)
							{
							document.getElementById("imagechart").src=url;
							document.getElementById("results_canvas").style.display = "none";
							}
						}
						
					  const config = {
						type: 'line',
						data: data,
						options: {
							aspectRatio: mobile ? 1 : 2,
							animation: {
								onComplete: done
							  },
							layout: {
								padding: {
									left: 50,
									right: 100,
									top: 150,
									bottom: 50
								}
							},
							hover: {
							  mode: 'nearest',
							  intersect: true
							},
							plugins: {
								legend: {
									text: 'Данные',
									display: false,
								},
								tooltip: {
									enabled: true,
								},
								datalabels: {
									clamp: true,
									align: -45,
									color: '#ffffff',
									backgroundColor: '#221C18',
									borderColor: '#948768',
									borderWidth: 1,
									borderRadius: 10,
									rotation: -60,
									formatter: function(value, context) {
										let labelValue = context.chart.data.labels[context.dataIndex].split(' /')[0];
										let splittedLabel = labelValue.split(' ');
										if(splittedLabel.length === 1){
											labelValue = splittedLabel[0];
										}
										if(splittedLabel.length === 2){
											labelValue = splittedLabel[0].substring(0, 5) + '. ' + splittedLabel[1].substring(0, 5) + '.'
										}
										if(splittedLabel.length === 3){
											labelValue = splittedLabel[0].substring(0, 5) + '. ' + splittedLabel[1] + ' ' + splittedLabel[2].substring(0, 5) + '.'
										}
									  return labelValue + ' (' + value + ')';
									},
									font: {
										size: 16,
									}
								  }
							},
							scales: {
								y: {
									min: 0,
									max: 25,
									weight: 10,
									grid: {
										borderColor: '#D3C196',
										tickColor: '#D3C196',
										offset: true,
										color: '#D3C196',
										borderDash: [10, 7]
									},
									ticks: {
										color: '#ffffff'
									}
								},
								x: {
									grid: {
										borderColor: '#D3C196',
										drawOnChartArea: false,
										tickColor: '#D3C196',
										color: '#D3C196'
									},
									ticks: {
										color: '#ffffff',
										callback: function(value, index, ticks) {
											var t = labels[index].replaceAll(' /').split (' ');
											if(t.length > 1)
											{
												var shortFIO = t [0][0] + ' ' + t [1][0];
											}
											else{
												var shortFIO = t [0][0]
											}
											
											return shortFIO;
										}
									}
								}
							}
						},
						plugins: [ChartDataLabels],
					  };
					
					var results_container = document.createElement("div");
					results_container.id = 'results_bg';

					var results_canvas_container = document.createElement("div");
					results_canvas_container.id = 'results_canvas';
					if(mobile)
					{
						results_canvas_container.style.width = "800px";
					}
					
					var newElemCanvas=document.createElement("canvas");
					newElemCanvas.id = 'myChart';
					if(mobile)
					{
						newElemCanvas.style.display = "none"
					}

					if(mobile)
					{
						var results_img = document.createElement("img");
						results_img.id = 'imagechart';
						results_img.style.width = "100%";
					}

					
					

					var newElemProgress=document.createElement("div");
					newElemProgress.id = 'progress_container';
					
					
					for (var i = 0; i < result_progress.length; i++) {
						newElemProgress.appendChild(result_progress[i]);
					}
					
					results_canvas_container.appendChild(newElemCanvas);
					results_container.appendChild(results_canvas_container);
					if(mobile)
					{
					results_container.appendChild(results_img);
					}
					results_container.appendChild(newElemProgress);
					document.getElementById('comp-l8vw5grk2').appendChild(results_container);
					
					const myChart = new Chart(
						document.getElementById('myChart').getContext("2d"),
						config
					  );
				}
			}

			function Init()
			{
				//Находим все кнопки
				let btns = document.getElementsByClassName("button");

				for(let i = 0; i < btns.length; i++)
				{
					//Прикрепляем событие для каждой отдельной кнопки
					//При нажатии на кнопку будет вызываться функция Click()
					btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
				}
			}

			function Click(index) 
			{
				//Получаем номер правильного ответа
				let correct = quiz.Click(index);

				//Находим все кнопки
				let btns = document.getElementsByClassName("button");

				//Делаем кнопки серыми
				for(let i = 0; i < btns.length; i++)
				{
					btns[i].className = "button button_passive";
				}

				//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
				if(quiz.type == 1)
				{
					if(correct >= 0)
					{
						btns[correct].className = "button button_correct";
					}

					if(index != correct) 
					{
						btns[index].className = "button button_wrong";
					} 
				}
				else
				{
					//Иначе просто подсвечиваем зелёным ответ пользователя
					btns[index].className = "button button_correct";
				}

				//Ждём секунду и обновляем тест
				setTimeout(Update, 10);
			}
