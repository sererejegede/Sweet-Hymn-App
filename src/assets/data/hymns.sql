CREATE TABLE `lyrics` (
  `id` int(11),
  `title` varchar(50),
  `chorus` text
)

INSERT INTO `lyrics` (`id`, `title`, `chorus`) VALUES
(1, 'In Christ Alone', ''),
(2, 'O Holy Night', ''),
(3, 'Silent Night', ''),
(4, 'Trust and Obey', ''),
(5, 'What a Friend We Have in Jesus', '');

CREATE TABLE `verses` (
  `id` int(11),
  `number` int(10) DEFAULT '1',
  `content` text,
  `lyric_id` int(11)
)

INSERT INTO `verses` (`id`, `number`, `content`, `lyric_id`) VALUES
(2, 1, 'In Christ alone my hope is found <br> He is my light, my strength, my song <br> This Cornerstone, this solid ground <br> Firm through the fiercest drought and storm <br> What heights of love, what depths of peace <br> When fears are stilled, when strivings cease <br> My Comforter, my All in All <br>rnHere in the love of Christ I stand <br>', 1),
(3, 2, 'In Christ alone, who took on flesh <br> Fullness of God in helpless babe <br> This gift of love and righteousness <br> Scorned by the ones He came to save <br> ''Til on that cross as Jesus died <br> The wrath of God was satisfied <br> For every sin on Him was laid <br> Here in the death of Christ I live, I live <br>', 1),
(4, 3, 'There in the ground His body lay <br> Light of the world by darkness slain <br> Then bursting forth in glorious Day <br> Up from the grave He rose again <br> And as He stands in victory <br> Sin''s curse has lost its grip on me <br> For I am His and He is mine <br> Bought with the precious blood of Christ <br>', 1),
(5, 4, 'No guilt in life, no fear in death <br> This is the power of Christ in me <br> From life''s first cry to final breath <br> Jesus commands my destiny <br> No power of hell, no scheme of man <br> Can ever pluck me from His hand <br> Till He returns or calls me home <br> Here in the power of Christ I''ll stand <br>', 1),
(6, 1, 'O Holy Night! The stars are brightly shining <br> It is the night of the dear Savior''s birth! <br> Long lay the world in sin and error pining <br> Till he appear''d and the soul felt its worth. <br> A thrill of hope the weary soul rejoices <br> For yonder breaks a new and glorious morn!', 2),
(7, 2, 'Led by the light of Faith serenely beaming <br> With glowing hearts by His cradle we stand <br> So led by light of a star sweetly gleaming <br> Here come the wise men from Orient land <br> The King of Kings lay thus in lowly manger <br> In all our trials born to be our friend', 2),
(8, 3, 'Truly He taught us to love one another <br> His law is love and His gospel is peace <br> Chains shall He break for the slave is our brother <br> And in His name all oppression shall cease <br> Sweet hymns of joy in grateful chorus raise we, <br> Let all within us praise His holy name', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lyrics`
--
ALTER TABLE `lyrics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `verses`
--
ALTER TABLE `verses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lyric_id` (`lyric_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lyrics`
--
ALTER TABLE `lyrics`
  MODIFY `id` int(11) AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `verses`
--
ALTER TABLE `verses`
  MODIFY `id` int(11) AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `verses`
--
ALTER TABLE `verses`
  ADD CONSTRAINT `verses_ibfk_1` FOREIGN KEY (`lyric_id`) REFERENCES `lyrics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
