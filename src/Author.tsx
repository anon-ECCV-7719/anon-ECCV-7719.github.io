import { AuthorInfo } from "./types";

interface Props {
  authors: AuthorInfo[];
}

const Author = ({ authors }: Props) => (
  <div className="py-1">
    {authors.map((author, index) => (
      <span className="relative p-4" key={index}>
        <span
          className="text-2xl font-normal text-gray"
        >
          {author.name}
        </span>
      </span>
    ))}
  </div>
);

export default Author;
