import styles from "../styles/Content.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <h3 className={styles.headline}>
        Computer Science Degree Accomplishments
      </h3>
      <hr className={styles.hr} />
      <br />
      <p className={styles.lists}>
        Over the course of my 4 year degree, I have learned about:
      </p>
      <ul className={styles.ul}>
        <li>the principles of programming</li>
        <li>set theory, graphs and spanning trees</li>
        <li>the inner outs of data structures & algorithm analysis</li>
        <li>giving commands to an MSP430 chip</li>
        <li>building a sample user database in MySQL Workbench</li>
        <li>agile and waterfall methodologies</li>
        <li>creating a sample linux kernel</li>
        <li>building a user interface/user experience design</li>
        <li>writing unit tests</li>
        <li>doing research on machine vision</li>
        <li>building an IoT device from scratch</li>
      </ul>
      <p style={{ fontSize: "24px" }}>My Journey</p>
      <p style={{ fontSize: "18px" }}>
        Starting off my journey, I began by learning the fundamentals of
        programming in Java by building a simple connect four game. Afterwards,
        I learned about set theory, graphs and spanning trees in discrete math.
        Then, I studied the different parts of data structures by employing
        arrays, hash tables, linked lists, queues and stacks, graphs, and binary
        trees. In addition, I implied the theory of binary search, merge sort,
        and breadth first search in algorithm analysis. I then took Computer
        Organization and Architecture, where we learned about parity bits and
        logic gates. Next, in Database Systems I got to experiment with MySQL
        Workbench in creating sample queries by learning how to insert and
        remove items from a table. Then, in intro to Software Engineering I
        learned about the different project management methodologies including
        the waterfall model and agile method. Afterwards, in Operating Systems,
        we developed a sample linux kernel by installing ubuntu on virtualbox
        and designing a linux kernel. Next, I took Concepts of Programming
        Languages where I understood the differences between a scanner, parser
        and an interpreter. Similarly, in Software Testing and Quality Assurance
        I took the same principles and applied unit testing for both
        program-based and specification-based testing. I then took user
        interface, where we learned how to apply the theory of generating
        efficient user interfaces and designs when showcasing a product. I
        decided to take internet programming as an elective, due to it being an
        interest learning about how the web interacts with api(s), client and
        server connections, etc. Consequently, I enrolled in Artificial
        Intelligence, where I got to experiment with TensorFlow and K-Means
        Clustering. Eventually, I entered machine vision, where I did research
        on facial recognition and object detection techniques by building a
        smart checkout system capable of detecting individual items in a cart
        and identifying a users face. Lastly, I took Senior Project, where I got
        to work with IoT devices including a raspberry pi, adafruit motor hat
        library and pi audio suite in successfully implementing an autonomous
        sentry gun.
      </p>
    </div>
  );
}
