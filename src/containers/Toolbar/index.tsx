import React from "react";
import { Text, Flex, Group, Select, Image } from "@mantine/core";
import toast from "react-hot-toast";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { SearchInput } from "src/containers/Toolbar/SearchInput";
import { FileFormat } from "src/enums/file.enum";
import { JSONCrackLogo } from "src/layout/JsonCrackLogo";
import useFile from "src/store/useFile";
import useModal from "src/store/useModal";
import useUser from "src/store/useUser";
import { AccountMenu } from "./AccountMenu";
import { FileMenu } from "./FileMenu";
import { Logo } from "./Logo";
import { OptionsMenu } from "./OptionsMenu";
import { ToolsMenu } from "./ToolsMenu";
import { ViewMenu } from "./ViewMenu";
import { ZoomMenu } from "./ZoomMenu";
import * as Styles from "./styles";

function fullscreenBrowser() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {
      toast.error("Unable to enter fullscreen mode.");
    });
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

interface ToolbarProps {
  isWidget?: boolean;
}

export const Toolbar = ({ isWidget = false }: ToolbarProps) => {
  const setVisible = useModal(state => state.setVisible);
  const setFormat = useFile(state => state.setFormat);
  const format = useFile(state => state.format);
  const isAuthenticated = useUser(state => state.isAuthenticated);

  return (
    <Styles.StyledTools>
      {isWidget && <Logo />}
      {!isWidget && (
        <Group gap="xs" justify="left" w="100%" style={{ flexWrap: "nowrap" }}>
          <Styles.StyledToolElement title="JSON Crack">
            <Flex gap="xs" align="center" justify="center">
              <JSONCrackLogo fontSize="0.8rem" hideLogo />
            </Flex>
          </Styles.StyledToolElement>

          <Select
            defaultValue="json"
            size="xs"
            value={format}
            onChange={e => setFormat(e as FileFormat)}
            miw={80}
            w={120}
            data={[
              { value: FileFormat.JSON, label: "JSON" },
              { value: FileFormat.YAML, label: "YAML" },
              { value: FileFormat.XML, label: "XML" },
              { value: FileFormat.TOML, label: "TOML" },
              { value: FileFormat.CSV, label: "CSV" },
            ]}
            allowDeselect={false}
          />

          <FileMenu />
          <ViewMenu />
          <ToolsMenu />
          {isAuthenticated && (
            <Styles.StyledToolElement title="Cloud" onClick={() => setVisible("cloud")(true)}>
              Cloud
            </Styles.StyledToolElement>
          )}
        </Group>
      )}
      <Group gap="xs" justify="right" w="100%" style={{ flexWrap: "nowrap" }}>
        {!isWidget && (
          <Styles.StyledToolElement
            onClick={() => window.open("https://todiagram.com?ref=jsoncrack.com")}
          >
            <Flex align="center" gap="4">
              <Image src="https://todiagram.com/logo.svg" alt="ToDiagram" width={14} height={14} />
              <Text c="bright" fw={600} fz="xs">
                ToDiagram
              </Text>
            </Flex>
          </Styles.StyledToolElement>
        )}

        <SearchInput />
        {!isWidget && (
          <>
            <Styles.StyledToolElement
              title="Save as Image"
              onClick={() => setVisible("download")(true)}
            >
              <FiDownload size="18" />
            </Styles.StyledToolElement>
            <ZoomMenu />
            <AccountMenu />
            <OptionsMenu />
            <Styles.StyledToolElement
              title="Fullscreen"
              $hide={isWidget}
              onClick={fullscreenBrowser}
            >
              <AiOutlineFullscreen size="18" />
            </Styles.StyledToolElement>
          </>
        )}
      </Group>
    </Styles.StyledTools>
  );
};
