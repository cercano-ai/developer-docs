---
title: "Images and audio"
section: "Cercano"
description: "Use image input and image- or audio-capable inference from Cercano workflows."
---

Cercano can inspect attached images and invoke image- or audio-capable models
through its built-in inference tools. Visual and media work stays connected to
the same agent, project, tools, and conversation as the rest of the task.

## Inspect images

Attach an image with a prompt. Cercano gives the reasoning loop a stable image
reference and uses a vision-capable model to answer focused questions about the
pixels. This is useful for screenshots, interfaces, diagrams, error states, and
other visual evidence.

Image inspection uses a confirmed vision-capable model. Depending on your
routing configuration, inspection can use a cloud model or an allowed local
fallback. If no compatible route is available, Cercano reports that limitation
instead of inventing an answer.

Successful inspection answers are cached per conversation for the same image
and normalized question. Image attachments are temporary rather than durable;
a resumed session may require the image to be attached again.

## Call media models

The built-in `deepinfra_infer` capability can make one request to a configured
DeepInfra native inference model. It supports the provider's raw JSON input and
explicitly bound attachments, so the agent can work with image generation,
speech recognition, text-to-speech, and other non-chat model families exposed
by that provider.

Generated image or audio payloads are saved as local artifacts instead of being
placed wholesale into model context. The agent receives bounded metadata and a
path to the raw result so the larger workflow can continue without flooding the
conversation with encoded media.

## Important boundaries

- Model and media capabilities vary. Confirm that the selected model supports
  the input and output format you need.
- Native media inference requires a configured DeepInfra profile and can spend
  paid provider quota.
- The native inference capability makes one request and does not retry paid
  work automatically.
- Attachment size, request size, and response size are bounded.
- Provider data handling and pricing apply to content sent to hosted models.
- Audio is handled through specialized inference models; the interactive prompt
  protocol does not advertise arbitrary audio prompt input.

See [models and providers](../models/) and the [complete feature guide](../features/).
