# `googleCesApp` Submodule <a name="`googleCesApp` Submodule" id="@cdktn/provider-google-beta.googleCesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesApp <a name="GoogleCesApp" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesApp(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  location: str,
  audio_processing_config: GoogleCesAppAudioProcessingConfig = None,
  client_certificate_settings: GoogleCesAppClientCertificateSettings = None,
  data_store_settings: GoogleCesAppDataStoreSettings = None,
  default_channel_profile: GoogleCesAppDefaultChannelProfile = None,
  deletion_policy: str = None,
  description: str = None,
  evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholds = None,
  global_instruction: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  language_settings: GoogleCesAppLanguageSettings = None,
  logging_settings: GoogleCesAppLoggingSettings = None,
  metadata: typing.Mapping[str] = None,
  model_settings: GoogleCesAppModelSettings = None,
  pinned: bool | IResolvable = None,
  project: str = None,
  root_agent: str = None,
  timeouts: GoogleCesAppTimeouts = None,
  time_zone_settings: GoogleCesAppTimeZoneSettings = None,
  tool_execution_mode: str = None,
  variable_declarations: IResolvable | typing.List[GoogleCesAppVariableDeclarations] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.globalInstruction">global_instruction</a></code> | <code>str</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.rootAgent">root_agent</a></code> | <code>str</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.variableDeclarations">variable_declarations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]</code> | variable_declarations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.appId"></a>

- *Type:* str

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#app_id GoogleCesApp#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#display_name GoogleCesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#location GoogleCesApp#location}

---

##### `audio_processing_config`<sup>Optional</sup> <a name="audio_processing_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.audioProcessingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_processing_config GoogleCesApp#audio_processing_config}

---

##### `client_certificate_settings`<sup>Optional</sup> <a name="client_certificate_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.clientCertificateSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#client_certificate_settings GoogleCesApp#client_certificate_settings}

---

##### `data_store_settings`<sup>Optional</sup> <a name="data_store_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dataStoreSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#data_store_settings GoogleCesApp#data_store_settings}

---

##### `default_channel_profile`<sup>Optional</sup> <a name="default_channel_profile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.defaultChannelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_channel_profile GoogleCesApp#default_channel_profile}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deletion_policy GoogleCesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `evaluation_metrics_thresholds`<sup>Optional</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.evaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#evaluation_metrics_thresholds GoogleCesApp#evaluation_metrics_thresholds}

---

##### `global_instruction`<sup>Optional</sup> <a name="global_instruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.globalInstruction"></a>

- *Type:* str

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#global_instruction GoogleCesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.guardrails"></a>

- *Type:* typing.List[str]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#guardrails GoogleCesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_settings`<sup>Optional</sup> <a name="language_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.languageSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_settings GoogleCesApp#language_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#logging_settings GoogleCesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#metadata GoogleCesApp#metadata}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model_settings GoogleCesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.pinned"></a>

- *Type:* bool | cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#pinned GoogleCesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}.

---

##### `root_agent`<sup>Optional</sup> <a name="root_agent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.rootAgent"></a>

- *Type:* str

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#root_agent GoogleCesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#timeouts GoogleCesApp#timeouts}

---

##### `time_zone_settings`<sup>Optional</sup> <a name="time_zone_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeZoneSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone_settings GoogleCesApp#time_zone_settings}

---

##### `tool_execution_mode`<sup>Optional</sup> <a name="tool_execution_mode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.toolExecutionMode"></a>

- *Type:* str

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_execution_mode GoogleCesApp#tool_execution_mode}

---

##### `variable_declarations`<sup>Optional</sup> <a name="variable_declarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.variableDeclarations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#variable_declarations GoogleCesApp#variable_declarations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig">put_audio_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings">put_client_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings">put_data_store_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile">put_default_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds">put_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings">put_language_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings">put_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings">put_time_zone_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations">put_variable_declarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig">reset_audio_processing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings">reset_client_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings">reset_data_store_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile">reset_default_channel_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds">reset_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction">reset_global_instruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings">reset_language_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings">reset_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings">reset_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned">reset_pinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent">reset_root_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings">reset_time_zone_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode">reset_tool_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations">reset_variable_declarations</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_audio_processing_config` <a name="put_audio_processing_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig"></a>

```python
def put_audio_processing_config(
  ambient_sound_config: GoogleCesAppAudioProcessingConfigAmbientSoundConfig = None,
  barge_in_config: GoogleCesAppAudioProcessingConfigBargeInConfig = None,
  inactivity_timeout: str = None,
  synthesize_speech_configs: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs] = None
) -> None
```

###### `ambient_sound_config`<sup>Optional</sup> <a name="ambient_sound_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.ambientSoundConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ambient_sound_config GoogleCesApp#ambient_sound_config}

---

###### `barge_in_config`<sup>Optional</sup> <a name="barge_in_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.bargeInConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_config GoogleCesApp#barge_in_config}

---

###### `inactivity_timeout`<sup>Optional</sup> <a name="inactivity_timeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.inactivityTimeout"></a>

- *Type:* str

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inactivity_timeout GoogleCesApp#inactivity_timeout}

---

###### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.synthesizeSpeechConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#synthesize_speech_configs GoogleCesApp#synthesize_speech_configs}

---

##### `put_client_certificate_settings` <a name="put_client_certificate_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings"></a>

```python
def put_client_certificate_settings(
  private_key: str,
  tls_certificate: str,
  passphrase: str = None
) -> None
```

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings.parameter.privateKey"></a>

- *Type:* str

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#private_key GoogleCesApp#private_key}

---

###### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings.parameter.tlsCertificate"></a>

- *Type:* str

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tls_certificate GoogleCesApp#tls_certificate}

---

###### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings.parameter.passphrase"></a>

- *Type:* str

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#passphrase GoogleCesApp#passphrase}

---

##### `put_data_store_settings` <a name="put_data_store_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings"></a>

```python
def put_data_store_settings() -> None
```

##### `put_default_channel_profile` <a name="put_default_channel_profile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile"></a>

```python
def put_default_channel_profile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: GoogleCesAppDefaultChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: GoogleCesAppDefaultChannelProfileWebWidgetConfig = None
) -> None
```

###### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.channelType"></a>

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#channel_type GoogleCesApp#channel_type}

---

###### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.disableBargeInControl"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_barge_in_control GoogleCesApp#disable_barge_in_control}

---

###### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.disableDtmf"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_dtmf GoogleCesApp#disable_dtmf}

---

###### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.personaProperty"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona_property GoogleCesApp#persona_property}

---

###### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.profileId"></a>

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#profile_id GoogleCesApp#profile_id}

---

###### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.webWidgetConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_config GoogleCesApp#web_widget_config}

---

##### `put_evaluation_metrics_thresholds` <a name="put_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds"></a>

```python
def put_evaluation_metrics_thresholds(
  golden_evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds = None
) -> None
```

###### `golden_evaluation_metrics_thresholds`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds.parameter.goldenEvaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#golden_evaluation_metrics_thresholds GoogleCesApp#golden_evaluation_metrics_thresholds}

---

##### `put_language_settings` <a name="put_language_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings"></a>

```python
def put_language_settings(
  default_language_code: str = None,
  enable_multilingual_support: bool | IResolvable = None,
  fallback_action: str = None,
  supported_language_codes: typing.List[str] = None
) -> None
```

###### `default_language_code`<sup>Optional</sup> <a name="default_language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.defaultLanguageCode"></a>

- *Type:* str

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_language_code GoogleCesApp#default_language_code}

---

###### `enable_multilingual_support`<sup>Optional</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.enableMultilingualSupport"></a>

- *Type:* bool | cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_multilingual_support GoogleCesApp#enable_multilingual_support}

---

###### `fallback_action`<sup>Optional</sup> <a name="fallback_action" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.fallbackAction"></a>

- *Type:* str

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#fallback_action GoogleCesApp#fallback_action}

---

###### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.supportedLanguageCodes"></a>

- *Type:* typing.List[str]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#supported_language_codes GoogleCesApp#supported_language_codes}

---

##### `put_logging_settings` <a name="put_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings"></a>

```python
def put_logging_settings(
  audio_recording_config: GoogleCesAppLoggingSettingsAudioRecordingConfig = None,
  bigquery_export_settings: GoogleCesAppLoggingSettingsBigqueryExportSettings = None,
  cloud_logging_settings: GoogleCesAppLoggingSettingsCloudLoggingSettings = None,
  conversation_logging_settings: GoogleCesAppLoggingSettingsConversationLoggingSettings = None,
  redaction_config: GoogleCesAppLoggingSettingsRedactionConfig = None
) -> None
```

###### `audio_recording_config`<sup>Optional</sup> <a name="audio_recording_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.audioRecordingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_recording_config GoogleCesApp#audio_recording_config}

---

###### `bigquery_export_settings`<sup>Optional</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.bigqueryExportSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#bigquery_export_settings GoogleCesApp#bigquery_export_settings}

---

###### `cloud_logging_settings`<sup>Optional</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.cloudLoggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#cloud_logging_settings GoogleCesApp#cloud_logging_settings}

---

###### `conversation_logging_settings`<sup>Optional</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.conversationLoggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#conversation_logging_settings GoogleCesApp#conversation_logging_settings}

---

###### `redaction_config`<sup>Optional</sup> <a name="redaction_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.redactionConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#redaction_config GoogleCesApp#redaction_config}

---

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model GoogleCesApp#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#temperature GoogleCesApp#temperature}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}.

---

##### `put_time_zone_settings` <a name="put_time_zone_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings"></a>

```python
def put_time_zone_settings(
  time_zone: str = None
) -> None
```

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings.parameter.timeZone"></a>

- *Type:* str

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone GoogleCesApp#time_zone}

---

##### `put_variable_declarations` <a name="put_variable_declarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations"></a>

```python
def put_variable_declarations(
  value: IResolvable | typing.List[GoogleCesAppVariableDeclarations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]

---

##### `reset_audio_processing_config` <a name="reset_audio_processing_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig"></a>

```python
def reset_audio_processing_config() -> None
```

##### `reset_client_certificate_settings` <a name="reset_client_certificate_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings"></a>

```python
def reset_client_certificate_settings() -> None
```

##### `reset_data_store_settings` <a name="reset_data_store_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings"></a>

```python
def reset_data_store_settings() -> None
```

##### `reset_default_channel_profile` <a name="reset_default_channel_profile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile"></a>

```python
def reset_default_channel_profile() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_evaluation_metrics_thresholds` <a name="reset_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds"></a>

```python
def reset_evaluation_metrics_thresholds() -> None
```

##### `reset_global_instruction` <a name="reset_global_instruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction"></a>

```python
def reset_global_instruction() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language_settings` <a name="reset_language_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings"></a>

```python
def reset_language_settings() -> None
```

##### `reset_logging_settings` <a name="reset_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings"></a>

```python
def reset_logging_settings() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```

##### `reset_pinned` <a name="reset_pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned"></a>

```python
def reset_pinned() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_root_agent` <a name="reset_root_agent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent"></a>

```python
def reset_root_agent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone_settings` <a name="reset_time_zone_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings"></a>

```python
def reset_time_zone_settings() -> None
```

##### `reset_tool_execution_mode` <a name="reset_tool_execution_mode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode"></a>

```python
def reset_tool_execution_mode() -> None
```

##### `reset_variable_declarations` <a name="reset_variable_declarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations"></a>

```python
def reset_variable_declarations() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesApp.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCesApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount">deployment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations">variable_declarations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput">audio_processing_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput">client_certificate_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput">data_store_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput">default_channel_profile_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput">evaluation_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput">global_instruction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput">guardrails_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput">language_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput">logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput">pinned_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput">root_agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput">time_zone_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput">tool_execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput">variable_declarations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction">global_instruction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent">root_agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `audio_processing_config`<sup>Required</sup> <a name="audio_processing_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig"></a>

```python
audio_processing_config: GoogleCesAppAudioProcessingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a>

---

##### `client_certificate_settings`<sup>Required</sup> <a name="client_certificate_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings"></a>

```python
client_certificate_settings: GoogleCesAppClientCertificateSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `data_store_settings`<sup>Required</sup> <a name="data_store_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings"></a>

```python
data_store_settings: GoogleCesAppDataStoreSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a>

---

##### `default_channel_profile`<sup>Required</sup> <a name="default_channel_profile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile"></a>

```python
default_channel_profile: GoogleCesAppDefaultChannelProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a>

---

##### `deployment_count`<sup>Required</sup> <a name="deployment_count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount"></a>

```python
deployment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `evaluation_metrics_thresholds`<sup>Required</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds"></a>

```python
evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `language_settings`<sup>Required</sup> <a name="language_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings"></a>

```python
language_settings: GoogleCesAppLanguageSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a>

---

##### `logging_settings`<sup>Required</sup> <a name="logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings"></a>

```python
logging_settings: GoogleCesAppLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a>

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings"></a>

```python
model_settings: GoogleCesAppModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts"></a>

```python
timeouts: GoogleCesAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a>

---

##### `time_zone_settings`<sup>Required</sup> <a name="time_zone_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings"></a>

```python
time_zone_settings: GoogleCesAppTimeZoneSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `variable_declarations`<sup>Required</sup> <a name="variable_declarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations"></a>

```python
variable_declarations: GoogleCesAppVariableDeclarationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `audio_processing_config_input`<sup>Optional</sup> <a name="audio_processing_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput"></a>

```python
audio_processing_config_input: GoogleCesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---

##### `client_certificate_settings_input`<sup>Optional</sup> <a name="client_certificate_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput"></a>

```python
client_certificate_settings_input: GoogleCesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---

##### `data_store_settings_input`<sup>Optional</sup> <a name="data_store_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput"></a>

```python
data_store_settings_input: GoogleCesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---

##### `default_channel_profile_input`<sup>Optional</sup> <a name="default_channel_profile_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput"></a>

```python
default_channel_profile_input: GoogleCesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_metrics_thresholds_input`<sup>Optional</sup> <a name="evaluation_metrics_thresholds_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput"></a>

```python
evaluation_metrics_thresholds_input: GoogleCesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---

##### `global_instruction_input`<sup>Optional</sup> <a name="global_instruction_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput"></a>

```python
global_instruction_input: str
```

- *Type:* str

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput"></a>

```python
guardrails_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_settings_input`<sup>Optional</sup> <a name="language_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput"></a>

```python
language_settings_input: GoogleCesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logging_settings_input`<sup>Optional</sup> <a name="logging_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput"></a>

```python
logging_settings_input: GoogleCesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput"></a>

```python
model_settings_input: GoogleCesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---

##### `pinned_input`<sup>Optional</sup> <a name="pinned_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput"></a>

```python
pinned_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `root_agent_input`<sup>Optional</sup> <a name="root_agent_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput"></a>

```python
root_agent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleCesAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---

##### `time_zone_settings_input`<sup>Optional</sup> <a name="time_zone_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput"></a>

```python
time_zone_settings_input: GoogleCesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---

##### `tool_execution_mode_input`<sup>Optional</sup> <a name="tool_execution_mode_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput"></a>

```python
tool_execution_mode_input: str
```

- *Type:* str

---

##### `variable_declarations_input`<sup>Optional</sup> <a name="variable_declarations_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput"></a>

```python
variable_declarations_input: IResolvable | typing.List[GoogleCesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `global_instruction`<sup>Required</sup> <a name="global_instruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction"></a>

```python
global_instruction: str
```

- *Type:* str

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `root_agent`<sup>Required</sup> <a name="root_agent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent"></a>

```python
root_agent: str
```

- *Type:* str

---

##### `tool_execution_mode`<sup>Required</sup> <a name="tool_execution_mode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode"></a>

```python
tool_execution_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAppAudioProcessingConfig <a name="GoogleCesAppAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfig(
  ambient_sound_config: GoogleCesAppAudioProcessingConfigAmbientSoundConfig = None,
  barge_in_config: GoogleCesAppAudioProcessingConfigBargeInConfig = None,
  inactivity_timeout: str = None,
  synthesize_speech_configs: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig">ambient_sound_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig">barge_in_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout">inactivity_timeout</a></code> | <code>str</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | synthesize_speech_configs block. |

---

##### `ambient_sound_config`<sup>Optional</sup> <a name="ambient_sound_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```python
ambient_sound_config: GoogleCesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ambient_sound_config GoogleCesApp#ambient_sound_config}

---

##### `barge_in_config`<sup>Optional</sup> <a name="barge_in_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig"></a>

```python
barge_in_config: GoogleCesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_config GoogleCesApp#barge_in_config}

---

##### `inactivity_timeout`<sup>Optional</sup> <a name="inactivity_timeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```python
inactivity_timeout: str
```

- *Type:* str

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inactivity_timeout GoogleCesApp#inactivity_timeout}

---

##### `synthesize_speech_configs`<sup>Optional</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#synthesize_speech_configs GoogleCesApp#synthesize_speech_configs}

---

### GoogleCesAppAudioProcessingConfigAmbientSoundConfig <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig(
  gcs_uri: str = None,
  prebuilt_ambient_sound: str = None,
  volume_gain_db: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">gcs_uri</a></code> | <code>str</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">prebuilt_ambient_sound</a></code> | <code>str</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_uri GoogleCesApp#gcs_uri}

---

##### `prebuilt_ambient_sound`<sup>Optional</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```python
prebuilt_ambient_sound: str
```

- *Type:* str

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prebuilt_ambient_sound GoogleCesApp#prebuilt_ambient_sound}

---

##### `volume_gain_db`<sup>Optional</sup> <a name="volume_gain_db" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#volume_gain_db GoogleCesApp#volume_gain_db}

---

### GoogleCesAppAudioProcessingConfigBargeInConfig <a name="GoogleCesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig(
  barge_in_awareness: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">barge_in_awareness</a></code> | <code>bool \| cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `barge_in_awareness`<sup>Optional</sup> <a name="barge_in_awareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```python
barge_in_awareness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_awareness GoogleCesApp#barge_in_awareness}

---

### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs(
  language_code: str,
  speaking_rate: typing.Union[int, float] = None,
  voice: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code>str</code> | The name of the voice. |

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}.

---

##### `speaking_rate`<sup>Optional</sup> <a name="speaking_rate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#speaking_rate GoogleCesApp#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```python
voice: str
```

- *Type:* str

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#voice GoogleCesApp#voice}

---

### GoogleCesAppClientCertificateSettings <a name="GoogleCesAppClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppClientCertificateSettings(
  private_key: str,
  tls_certificate: str,
  passphrase: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey">private_key</a></code> | <code>str</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase">passphrase</a></code> | <code>str</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#private_key GoogleCesApp#private_key}

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tls_certificate GoogleCesApp#tls_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#passphrase GoogleCesApp#passphrase}

---

### GoogleCesAppConfig <a name="GoogleCesAppConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  display_name: str,
  location: str,
  audio_processing_config: GoogleCesAppAudioProcessingConfig = None,
  client_certificate_settings: GoogleCesAppClientCertificateSettings = None,
  data_store_settings: GoogleCesAppDataStoreSettings = None,
  default_channel_profile: GoogleCesAppDefaultChannelProfile = None,
  deletion_policy: str = None,
  description: str = None,
  evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholds = None,
  global_instruction: str = None,
  guardrails: typing.List[str] = None,
  id: str = None,
  language_settings: GoogleCesAppLanguageSettings = None,
  logging_settings: GoogleCesAppLoggingSettings = None,
  metadata: typing.Mapping[str] = None,
  model_settings: GoogleCesAppModelSettings = None,
  pinned: bool | IResolvable = None,
  project: str = None,
  root_agent: str = None,
  timeouts: GoogleCesAppTimeouts = None,
  time_zone_settings: GoogleCesAppTimeZoneSettings = None,
  tool_execution_mode: str = None,
  variable_declarations: IResolvable | typing.List[GoogleCesAppVariableDeclarations] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId">app_id</a></code> | <code>str</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig">audio_processing_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings">client_certificate_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings">data_store_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile">default_channel_profile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds">evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction">global_instruction</a></code> | <code>str</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails">guardrails</a></code> | <code>typing.List[str]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings">language_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings">logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned">pinned</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent">root_agent</a></code> | <code>str</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings">time_zone_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode">tool_execution_mode</a></code> | <code>str</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations">variable_declarations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]</code> | variable_declarations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#app_id GoogleCesApp#app_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#display_name GoogleCesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#location GoogleCesApp#location}

---

##### `audio_processing_config`<sup>Optional</sup> <a name="audio_processing_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig"></a>

```python
audio_processing_config: GoogleCesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_processing_config GoogleCesApp#audio_processing_config}

---

##### `client_certificate_settings`<sup>Optional</sup> <a name="client_certificate_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings"></a>

```python
client_certificate_settings: GoogleCesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#client_certificate_settings GoogleCesApp#client_certificate_settings}

---

##### `data_store_settings`<sup>Optional</sup> <a name="data_store_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings"></a>

```python
data_store_settings: GoogleCesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#data_store_settings GoogleCesApp#data_store_settings}

---

##### `default_channel_profile`<sup>Optional</sup> <a name="default_channel_profile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile"></a>

```python
default_channel_profile: GoogleCesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_channel_profile GoogleCesApp#default_channel_profile}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deletion_policy GoogleCesApp#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `evaluation_metrics_thresholds`<sup>Optional</sup> <a name="evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds"></a>

```python
evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#evaluation_metrics_thresholds GoogleCesApp#evaluation_metrics_thresholds}

---

##### `global_instruction`<sup>Optional</sup> <a name="global_instruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction"></a>

```python
global_instruction: str
```

- *Type:* str

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#global_instruction GoogleCesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails"></a>

```python
guardrails: typing.List[str]
```

- *Type:* typing.List[str]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#guardrails GoogleCesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_settings`<sup>Optional</sup> <a name="language_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings"></a>

```python
language_settings: GoogleCesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_settings GoogleCesApp#language_settings}

---

##### `logging_settings`<sup>Optional</sup> <a name="logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings"></a>

```python
logging_settings: GoogleCesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#logging_settings GoogleCesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#metadata GoogleCesApp#metadata}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings"></a>

```python
model_settings: GoogleCesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model_settings GoogleCesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned"></a>

```python
pinned: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#pinned GoogleCesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}.

---

##### `root_agent`<sup>Optional</sup> <a name="root_agent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent"></a>

```python
root_agent: str
```

- *Type:* str

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#root_agent GoogleCesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts"></a>

```python
timeouts: GoogleCesAppTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#timeouts GoogleCesApp#timeouts}

---

##### `time_zone_settings`<sup>Optional</sup> <a name="time_zone_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings"></a>

```python
time_zone_settings: GoogleCesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone_settings GoogleCesApp#time_zone_settings}

---

##### `tool_execution_mode`<sup>Optional</sup> <a name="tool_execution_mode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode"></a>

```python
tool_execution_mode: str
```

- *Type:* str

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_execution_mode GoogleCesApp#tool_execution_mode}

---

##### `variable_declarations`<sup>Optional</sup> <a name="variable_declarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations"></a>

```python
variable_declarations: IResolvable | typing.List[GoogleCesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#variable_declarations GoogleCesApp#variable_declarations}

---

### GoogleCesAppDataStoreSettings <a name="GoogleCesAppDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDataStoreSettings()
```


### GoogleCesAppDataStoreSettingsEngines <a name="GoogleCesAppDataStoreSettingsEngines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDataStoreSettingsEngines()
```


### GoogleCesAppDefaultChannelProfile <a name="GoogleCesAppDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfile(
  channel_type: str = None,
  disable_barge_in_control: bool | IResolvable = None,
  disable_dtmf: bool | IResolvable = None,
  persona_property: GoogleCesAppDefaultChannelProfilePersonaProperty = None,
  profile_id: str = None,
  web_widget_config: GoogleCesAppDefaultChannelProfileWebWidgetConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType">channel_type</a></code> | <code>str</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId">profile_id</a></code> | <code>str</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channel_type`<sup>Optional</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#channel_type GoogleCesApp#channel_type}

---

##### `disable_barge_in_control`<sup>Optional</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_barge_in_control GoogleCesApp#disable_barge_in_control}

---

##### `disable_dtmf`<sup>Optional</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_dtmf GoogleCesApp#disable_dtmf}

---

##### `persona_property`<sup>Optional</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty"></a>

```python
persona_property: GoogleCesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona_property GoogleCesApp#persona_property}

---

##### `profile_id`<sup>Optional</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#profile_id GoogleCesApp#profile_id}

---

##### `web_widget_config`<sup>Optional</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```python
web_widget_config: GoogleCesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_config GoogleCesApp#web_widget_config}

---

### GoogleCesAppDefaultChannelProfilePersonaProperty <a name="GoogleCesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty(
  persona: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>str</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```python
persona: str
```

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona GoogleCesApp#persona}

---

### GoogleCesAppDefaultChannelProfileWebWidgetConfig <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>str</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>str</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```python
modality: str
```

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#modality GoogleCesApp#modality}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```python
theme: str
```

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#theme GoogleCesApp#theme}

---

##### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_title GoogleCesApp#web_widget_title}

---

### GoogleCesAppEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholds(
  golden_evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">golden_evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `golden_evaluation_metrics_thresholds`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```python
golden_evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#golden_evaluation_metrics_thresholds GoogleCesApp#golden_evaluation_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds(
  expectation_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds = None,
  turn_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">expectation_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">turn_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `expectation_level_metrics_thresholds`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```python
expectation_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#expectation_level_metrics_thresholds GoogleCesApp#expectation_level_metrics_thresholds}

---

##### `turn_level_metrics_thresholds`<sup>Optional</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```python
turn_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#turn_level_metrics_thresholds GoogleCesApp#turn_level_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds(
  tool_invocation_parameter_correctness_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">tool_invocation_parameter_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `tool_invocation_parameter_correctness_threshold`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```python
tool_invocation_parameter_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_invocation_parameter_correctness_threshold GoogleCesApp#tool_invocation_parameter_correctness_threshold}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds(
  overall_tool_invocation_correctness_threshold: typing.Union[int, float] = None,
  semantic_similarity_success_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">overall_tool_invocation_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">semantic_similarity_success_threshold</a></code> | <code>typing.Union[int, float]</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `overall_tool_invocation_correctness_threshold`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```python
overall_tool_invocation_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#overall_tool_invocation_correctness_threshold GoogleCesApp#overall_tool_invocation_correctness_threshold}

---

##### `semantic_similarity_success_threshold`<sup>Optional</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```python
semantic_similarity_success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#semantic_similarity_success_threshold GoogleCesApp#semantic_similarity_success_threshold}

---

### GoogleCesAppLanguageSettings <a name="GoogleCesAppLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLanguageSettings(
  default_language_code: str = None,
  enable_multilingual_support: bool | IResolvable = None,
  fallback_action: str = None,
  supported_language_codes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport">enable_multilingual_support</a></code> | <code>bool \| cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction">fallback_action</a></code> | <code>str</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `default_language_code`<sup>Optional</sup> <a name="default_language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_language_code GoogleCesApp#default_language_code}

---

##### `enable_multilingual_support`<sup>Optional</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport"></a>

```python
enable_multilingual_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_multilingual_support GoogleCesApp#enable_multilingual_support}

---

##### `fallback_action`<sup>Optional</sup> <a name="fallback_action" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#fallback_action GoogleCesApp#fallback_action}

---

##### `supported_language_codes`<sup>Optional</sup> <a name="supported_language_codes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#supported_language_codes GoogleCesApp#supported_language_codes}

---

### GoogleCesAppLoggingSettings <a name="GoogleCesAppLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettings(
  audio_recording_config: GoogleCesAppLoggingSettingsAudioRecordingConfig = None,
  bigquery_export_settings: GoogleCesAppLoggingSettingsBigqueryExportSettings = None,
  cloud_logging_settings: GoogleCesAppLoggingSettingsCloudLoggingSettings = None,
  conversation_logging_settings: GoogleCesAppLoggingSettingsConversationLoggingSettings = None,
  redaction_config: GoogleCesAppLoggingSettingsRedactionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig">audio_recording_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings">bigquery_export_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings">cloud_logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings">conversation_logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig">redaction_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `audio_recording_config`<sup>Optional</sup> <a name="audio_recording_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig"></a>

```python
audio_recording_config: GoogleCesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_recording_config GoogleCesApp#audio_recording_config}

---

##### `bigquery_export_settings`<sup>Optional</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings"></a>

```python
bigquery_export_settings: GoogleCesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#bigquery_export_settings GoogleCesApp#bigquery_export_settings}

---

##### `cloud_logging_settings`<sup>Optional</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings"></a>

```python
cloud_logging_settings: GoogleCesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#cloud_logging_settings GoogleCesApp#cloud_logging_settings}

---

##### `conversation_logging_settings`<sup>Optional</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings"></a>

```python
conversation_logging_settings: GoogleCesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#conversation_logging_settings GoogleCesApp#conversation_logging_settings}

---

##### `redaction_config`<sup>Optional</sup> <a name="redaction_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig"></a>

```python
redaction_config: GoogleCesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#redaction_config GoogleCesApp#redaction_config}

---

### GoogleCesAppLoggingSettingsAudioRecordingConfig <a name="GoogleCesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig(
  gcs_bucket: str = None,
  gcs_path_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">gcs_path_prefix</a></code> | <code>str</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_bucket GoogleCesApp#gcs_bucket}

---

##### `gcs_path_prefix`<sup>Optional</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```python
gcs_path_prefix: str
```

- *Type:* str

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_path_prefix GoogleCesApp#gcs_path_prefix}

---

### GoogleCesAppLoggingSettingsBigqueryExportSettings <a name="GoogleCesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings(
  dataset: str = None,
  enabled: bool | IResolvable = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset">dataset</a></code> | <code>str</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project">project</a></code> | <code>str</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#dataset GoogleCesApp#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enabled GoogleCesApp#enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```python
project: str
```

- *Type:* str

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}

---

### GoogleCesAppLoggingSettingsCloudLoggingSettings <a name="GoogleCesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings(
  enable_cloud_logging: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```python
enable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_cloud_logging GoogleCesApp#enable_cloud_logging}

---

### GoogleCesAppLoggingSettingsConversationLoggingSettings <a name="GoogleCesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings(
  disable_conversation_logging: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">disable_conversation_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |

---

##### `disable_conversation_logging`<sup>Optional</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```python
disable_conversation_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_conversation_logging GoogleCesApp#disable_conversation_logging}

---

### GoogleCesAppLoggingSettingsRedactionConfig <a name="GoogleCesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig(
  deidentify_template: str = None,
  enable_redaction: bool | IResolvable = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction">enable_redaction</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deidentify_template GoogleCesApp#deidentify_template}

---

##### `enable_redaction`<sup>Optional</sup> <a name="enable_redaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```python
enable_redaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_redaction GoogleCesApp#enable_redaction}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inspect_template GoogleCesApp#inspect_template}

---

### GoogleCesAppModelSettings <a name="GoogleCesAppModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model GoogleCesApp#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#temperature GoogleCesApp#temperature}

---

### GoogleCesAppTimeouts <a name="GoogleCesAppTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}.

---

### GoogleCesAppTimeZoneSettings <a name="GoogleCesAppTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppTimeZoneSettings(
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone">time_zone</a></code> | <code>str</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone GoogleCesApp#time_zone}

---

### GoogleCesAppVariableDeclarations <a name="GoogleCesAppVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppVariableDeclarations(
  description: str,
  name: str,
  schema: GoogleCesAppVariableDeclarationsSchema
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description">description</a></code> | <code>str</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name">name</a></code> | <code>str</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#name GoogleCesApp#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema"></a>

```python
schema: GoogleCesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#schema GoogleCesApp#schema}

---

### GoogleCesAppVariableDeclarationsSchema <a name="GoogleCesAppVariableDeclarationsSchema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppVariableDeclarationsSchema(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type">type</a></code> | <code>str</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties">additional_properties</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf">any_of</a></code> | <code>str</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default">default</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs">defs</a></code> | <code>str</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description">description</a></code> | <code>str</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum">enum</a></code> | <code>typing.List[str]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items">items</a></code> | <code>str</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems">prefix_items</a></code> | <code>str</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties">properties</a></code> | <code>str</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref">ref</a></code> | <code>str</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.required">required</a></code> | <code>typing.List[str]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title">title</a></code> | <code>str</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#type GoogleCesApp#type}

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#additional_properties GoogleCesApp#additional_properties}

---

##### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#any_of GoogleCesApp#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default"></a>

```python
default: str
```

- *Type:* str

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default GoogleCesApp#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs"></a>

```python
defs: str
```

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#defs GoogleCesApp#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enum GoogleCesApp#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items"></a>

```python
items: str
```

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#items GoogleCesApp#items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#nullable GoogleCesApp#nullable}

---

##### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prefix_items GoogleCesApp#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties"></a>

```python
properties: str
```

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#properties GoogleCesApp#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref"></a>

```python
ref: str
```

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ref GoogleCesApp#ref}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#required GoogleCesApp#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#title GoogleCesApp#title}

---

##### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#unique_items GoogleCesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">reset_gcs_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">reset_prebuilt_ambient_sound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">reset_volume_gain_db</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcs_uri` <a name="reset_gcs_uri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```python
def reset_gcs_uri() -> None
```

##### `reset_prebuilt_ambient_sound` <a name="reset_prebuilt_ambient_sound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```python
def reset_prebuilt_ambient_sound() -> None
```

##### `reset_volume_gain_db` <a name="reset_volume_gain_db" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```python
def reset_volume_gain_db() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">gcs_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">prebuilt_ambient_sound_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">volume_gain_db_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">gcs_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">prebuilt_ambient_sound</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">volume_gain_db</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_uri_input`<sup>Optional</sup> <a name="gcs_uri_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```python
gcs_uri_input: str
```

- *Type:* str

---

##### `prebuilt_ambient_sound_input`<sup>Optional</sup> <a name="prebuilt_ambient_sound_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```python
prebuilt_ambient_sound_input: str
```

- *Type:* str

---

##### `volume_gain_db_input`<sup>Optional</sup> <a name="volume_gain_db_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```python
volume_gain_db_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gcs_uri`<sup>Required</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```python
gcs_uri: str
```

- *Type:* str

---

##### `prebuilt_ambient_sound`<sup>Required</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```python
prebuilt_ambient_sound: str
```

- *Type:* str

---

##### `volume_gain_db`<sup>Required</sup> <a name="volume_gain_db" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```python
volume_gain_db: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">reset_barge_in_awareness</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_barge_in_awareness` <a name="reset_barge_in_awareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```python
def reset_barge_in_awareness() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">barge_in_awareness_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">barge_in_awareness</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `barge_in_awareness_input`<sup>Optional</sup> <a name="barge_in_awareness_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```python
barge_in_awareness_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `barge_in_awareness`<sup>Required</sup> <a name="barge_in_awareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```python
barge_in_awareness: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---


### GoogleCesAppAudioProcessingConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">put_ambient_sound_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig">put_barge_in_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">put_synthesize_speech_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">reset_ambient_sound_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig">reset_barge_in_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">reset_inactivity_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">reset_synthesize_speech_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ambient_sound_config` <a name="put_ambient_sound_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```python
def put_ambient_sound_config(
  gcs_uri: str = None,
  prebuilt_ambient_sound: str = None,
  volume_gain_db: typing.Union[int, float] = None
) -> None
```

###### `gcs_uri`<sup>Optional</sup> <a name="gcs_uri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.gcsUri"></a>

- *Type:* str

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_uri GoogleCesApp#gcs_uri}

---

###### `prebuilt_ambient_sound`<sup>Optional</sup> <a name="prebuilt_ambient_sound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.prebuiltAmbientSound"></a>

- *Type:* str

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prebuilt_ambient_sound GoogleCesApp#prebuilt_ambient_sound}

---

###### `volume_gain_db`<sup>Optional</sup> <a name="volume_gain_db" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.volumeGainDb"></a>

- *Type:* typing.Union[int, float]

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#volume_gain_db GoogleCesApp#volume_gain_db}

---

##### `put_barge_in_config` <a name="put_barge_in_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```python
def put_barge_in_config(
  barge_in_awareness: bool | IResolvable = None
) -> None
```

###### `barge_in_awareness`<sup>Optional</sup> <a name="barge_in_awareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.bargeInAwareness"></a>

- *Type:* bool | cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_awareness GoogleCesApp#barge_in_awareness}

---

##### `put_synthesize_speech_configs` <a name="put_synthesize_speech_configs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```python
def put_synthesize_speech_configs(
  value: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---

##### `reset_ambient_sound_config` <a name="reset_ambient_sound_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```python
def reset_ambient_sound_config() -> None
```

##### `reset_barge_in_config` <a name="reset_barge_in_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```python
def reset_barge_in_config() -> None
```

##### `reset_inactivity_timeout` <a name="reset_inactivity_timeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```python
def reset_inactivity_timeout() -> None
```

##### `reset_synthesize_speech_configs` <a name="reset_synthesize_speech_configs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```python
def reset_synthesize_speech_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">ambient_sound_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig">barge_in_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">synthesize_speech_configs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">ambient_sound_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">barge_in_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">inactivity_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">synthesize_speech_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">inactivity_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ambient_sound_config`<sup>Required</sup> <a name="ambient_sound_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```python
ambient_sound_config: GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `barge_in_config`<sup>Required</sup> <a name="barge_in_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```python
barge_in_config: GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `synthesize_speech_configs`<sup>Required</sup> <a name="synthesize_speech_configs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```python
synthesize_speech_configs: GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `ambient_sound_config_input`<sup>Optional</sup> <a name="ambient_sound_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```python
ambient_sound_config_input: GoogleCesAppAudioProcessingConfigAmbientSoundConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `barge_in_config_input`<sup>Optional</sup> <a name="barge_in_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```python
barge_in_config_input: GoogleCesAppAudioProcessingConfigBargeInConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---

##### `inactivity_timeout_input`<sup>Optional</sup> <a name="inactivity_timeout_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```python
inactivity_timeout_input: str
```

- *Type:* str

---

##### `synthesize_speech_configs_input`<sup>Optional</sup> <a name="synthesize_speech_configs_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```python
synthesize_speech_configs_input: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---

##### `inactivity_timeout`<sup>Required</sup> <a name="inactivity_timeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```python
inactivity_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppAudioProcessingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>]

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">reset_speaking_rate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">reset_voice</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_speaking_rate` <a name="reset_speaking_rate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```python
def reset_speaking_rate() -> None
```

##### `reset_voice` <a name="reset_voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```python
def reset_voice() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speaking_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">voice_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">speaking_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `speaking_rate_input`<sup>Optional</sup> <a name="speaking_rate_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```python
speaking_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice_input`<sup>Optional</sup> <a name="voice_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```python
voice_input: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `speaking_rate`<sup>Required</sup> <a name="speaking_rate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```python
speaking_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```python
voice: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### GoogleCesAppClientCertificateSettingsOutputReference <a name="GoogleCesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase">reset_passphrase</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_passphrase` <a name="reset_passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```python
def reset_passphrase() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput">passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">tls_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase">passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate">tls_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `passphrase_input`<sup>Optional</sup> <a name="passphrase_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```python
passphrase_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `tls_certificate_input`<sup>Optional</sup> <a name="tls_certificate_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```python
tls_certificate_input: str
```

- *Type:* str

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```python
passphrase: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `tls_certificate`<sup>Required</sup> <a name="tls_certificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```python
tls_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppClientCertificateSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---


### GoogleCesAppDataStoreSettingsEnginesList <a name="GoogleCesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDataStoreSettingsEnginesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAppDataStoreSettingsEnginesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleCesAppDataStoreSettingsEnginesOutputReference <a name="GoogleCesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppDataStoreSettingsEngines
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a>

---


### GoogleCesAppDataStoreSettingsOutputReference <a name="GoogleCesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDataStoreSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines">engines</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines"></a>

```python
engines: GoogleCesAppDataStoreSettingsEnginesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppDataStoreSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---


### GoogleCesAppDefaultChannelProfileOutputReference <a name="GoogleCesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty">put_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">put_web_widget_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType">reset_channel_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">reset_disable_barge_in_control</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf">reset_disable_dtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty">reset_persona_property</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId">reset_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">reset_web_widget_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_persona_property` <a name="put_persona_property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```python
def put_persona_property(
  persona: str = None
) -> None
```

###### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.persona"></a>

- *Type:* str

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona GoogleCesApp#persona}

---

##### `put_web_widget_config` <a name="put_web_widget_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```python
def put_web_widget_config(
  modality: str = None,
  theme: str = None,
  web_widget_title: str = None
) -> None
```

###### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.modality"></a>

- *Type:* str

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#modality GoogleCesApp#modality}

---

###### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.theme"></a>

- *Type:* str

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#theme GoogleCesApp#theme}

---

###### `web_widget_title`<sup>Optional</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.webWidgetTitle"></a>

- *Type:* str

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_title GoogleCesApp#web_widget_title}

---

##### `reset_channel_type` <a name="reset_channel_type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```python
def reset_channel_type() -> None
```

##### `reset_disable_barge_in_control` <a name="reset_disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```python
def reset_disable_barge_in_control() -> None
```

##### `reset_disable_dtmf` <a name="reset_disable_dtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```python
def reset_disable_dtmf() -> None
```

##### `reset_persona_property` <a name="reset_persona_property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```python
def reset_persona_property() -> None
```

##### `reset_profile_id` <a name="reset_profile_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```python
def reset_profile_id() -> None
```

##### `reset_web_widget_config` <a name="reset_web_widget_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```python
def reset_web_widget_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty">persona_property</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">web_widget_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput">channel_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">disable_barge_in_control_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">disable_dtmf_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">persona_property_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput">profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">web_widget_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType">channel_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">disable_barge_in_control</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf">disable_dtmf</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId">profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_property`<sup>Required</sup> <a name="persona_property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```python
persona_property: GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `web_widget_config`<sup>Required</sup> <a name="web_widget_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```python
web_widget_config: GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channel_type_input`<sup>Optional</sup> <a name="channel_type_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```python
channel_type_input: str
```

- *Type:* str

---

##### `disable_barge_in_control_input`<sup>Optional</sup> <a name="disable_barge_in_control_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```python
disable_barge_in_control_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf_input`<sup>Optional</sup> <a name="disable_dtmf_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```python
disable_dtmf_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `persona_property_input`<sup>Optional</sup> <a name="persona_property_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```python
persona_property_input: GoogleCesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---

##### `profile_id_input`<sup>Optional</sup> <a name="profile_id_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```python
profile_id_input: str
```

- *Type:* str

---

##### `web_widget_config_input`<sup>Optional</sup> <a name="web_widget_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```python
web_widget_config_input: GoogleCesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `channel_type`<sup>Required</sup> <a name="channel_type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```python
channel_type: str
```

- *Type:* str

---

##### `disable_barge_in_control`<sup>Required</sup> <a name="disable_barge_in_control" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```python
disable_barge_in_control: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_dtmf`<sup>Required</sup> <a name="disable_dtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```python
disable_dtmf: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_id`<sup>Required</sup> <a name="profile_id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```python
profile_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppDefaultChannelProfile
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---


### GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">reset_persona</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_persona` <a name="reset_persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```python
def reset_persona() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">persona_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `persona_input`<sup>Optional</sup> <a name="persona_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```python
persona_input: str
```

- *Type:* str

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```python
persona: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppDefaultChannelProfilePersonaProperty
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---


### GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">reset_modality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">reset_theme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">reset_web_widget_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_modality` <a name="reset_modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```python
def reset_modality() -> None
```

##### `reset_theme` <a name="reset_theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```python
def reset_theme() -> None
```

##### `reset_web_widget_title` <a name="reset_web_widget_title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```python
def reset_web_widget_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">theme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">web_widget_title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">web_widget_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `modality_input`<sup>Optional</sup> <a name="modality_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```python
modality_input: str
```

- *Type:* str

---

##### `theme_input`<sup>Optional</sup> <a name="theme_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```python
theme_input: str
```

- *Type:* str

---

##### `web_widget_title_input`<sup>Optional</sup> <a name="web_widget_title_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```python
web_widget_title_input: str
```

- *Type:* str

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```python
modality: str
```

- *Type:* str

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```python
theme: str
```

- *Type:* str

---

##### `web_widget_title`<sup>Required</sup> <a name="web_widget_title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```python
web_widget_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppDefaultChannelProfileWebWidgetConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">reset_tool_invocation_parameter_correctness_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tool_invocation_parameter_correctness_threshold` <a name="reset_tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```python
def reset_tool_invocation_parameter_correctness_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">tool_invocation_parameter_correctness_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">tool_invocation_parameter_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tool_invocation_parameter_correctness_threshold_input`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```python
tool_invocation_parameter_correctness_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tool_invocation_parameter_correctness_threshold`<sup>Required</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```python
tool_invocation_parameter_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">put_expectation_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">put_turn_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">reset_expectation_level_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">reset_turn_level_metrics_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expectation_level_metrics_thresholds` <a name="put_expectation_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```python
def put_expectation_level_metrics_thresholds(
  tool_invocation_parameter_correctness_threshold: typing.Union[int, float] = None
) -> None
```

###### `tool_invocation_parameter_correctness_threshold`<sup>Optional</sup> <a name="tool_invocation_parameter_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.toolInvocationParameterCorrectnessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_invocation_parameter_correctness_threshold GoogleCesApp#tool_invocation_parameter_correctness_threshold}

---

##### `put_turn_level_metrics_thresholds` <a name="put_turn_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```python
def put_turn_level_metrics_thresholds(
  overall_tool_invocation_correctness_threshold: typing.Union[int, float] = None,
  semantic_similarity_success_threshold: typing.Union[int, float] = None
) -> None
```

###### `overall_tool_invocation_correctness_threshold`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.overallToolInvocationCorrectnessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#overall_tool_invocation_correctness_threshold GoogleCesApp#overall_tool_invocation_correctness_threshold}

---

###### `semantic_similarity_success_threshold`<sup>Optional</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.semanticSimilaritySuccessThreshold"></a>

- *Type:* typing.Union[int, float]

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#semantic_similarity_success_threshold GoogleCesApp#semantic_similarity_success_threshold}

---

##### `reset_expectation_level_metrics_thresholds` <a name="reset_expectation_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```python
def reset_expectation_level_metrics_thresholds() -> None
```

##### `reset_turn_level_metrics_thresholds` <a name="reset_turn_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```python
def reset_turn_level_metrics_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">expectation_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">turn_level_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">expectation_level_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">turn_level_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expectation_level_metrics_thresholds`<sup>Required</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```python
expectation_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `turn_level_metrics_thresholds`<sup>Required</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```python
turn_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `expectation_level_metrics_thresholds_input`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```python
expectation_level_metrics_thresholds_input: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `turn_level_metrics_thresholds_input`<sup>Optional</sup> <a name="turn_level_metrics_thresholds_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```python
turn_level_metrics_thresholds_input: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">reset_overall_tool_invocation_correctness_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">reset_semantic_similarity_success_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_overall_tool_invocation_correctness_threshold` <a name="reset_overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```python
def reset_overall_tool_invocation_correctness_threshold() -> None
```

##### `reset_semantic_similarity_success_threshold` <a name="reset_semantic_similarity_success_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```python
def reset_semantic_similarity_success_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">overall_tool_invocation_correctness_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">semantic_similarity_success_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">overall_tool_invocation_correctness_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">semantic_similarity_success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `overall_tool_invocation_correctness_threshold_input`<sup>Optional</sup> <a name="overall_tool_invocation_correctness_threshold_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```python
overall_tool_invocation_correctness_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `semantic_similarity_success_threshold_input`<sup>Optional</sup> <a name="semantic_similarity_success_threshold_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```python
semantic_similarity_success_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `overall_tool_invocation_correctness_threshold`<sup>Required</sup> <a name="overall_tool_invocation_correctness_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```python
overall_tool_invocation_correctness_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `semantic_similarity_success_threshold`<sup>Required</sup> <a name="semantic_similarity_success_threshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```python
semantic_similarity_success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">put_golden_evaluation_metrics_thresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">reset_golden_evaluation_metrics_thresholds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_golden_evaluation_metrics_thresholds` <a name="put_golden_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```python
def put_golden_evaluation_metrics_thresholds(
  expectation_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds = None,
  turn_level_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds = None
) -> None
```

###### `expectation_level_metrics_thresholds`<sup>Optional</sup> <a name="expectation_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.expectationLevelMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#expectation_level_metrics_thresholds GoogleCesApp#expectation_level_metrics_thresholds}

---

###### `turn_level_metrics_thresholds`<sup>Optional</sup> <a name="turn_level_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.turnLevelMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#turn_level_metrics_thresholds GoogleCesApp#turn_level_metrics_thresholds}

---

##### `reset_golden_evaluation_metrics_thresholds` <a name="reset_golden_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```python
def reset_golden_evaluation_metrics_thresholds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">golden_evaluation_metrics_thresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">golden_evaluation_metrics_thresholds_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `golden_evaluation_metrics_thresholds`<sup>Required</sup> <a name="golden_evaluation_metrics_thresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```python
golden_evaluation_metrics_thresholds: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `golden_evaluation_metrics_thresholds_input`<sup>Optional</sup> <a name="golden_evaluation_metrics_thresholds_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```python
golden_evaluation_metrics_thresholds_input: GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppEvaluationMetricsThresholds
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---


### GoogleCesAppLanguageSettingsOutputReference <a name="GoogleCesAppLanguageSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLanguageSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">reset_default_language_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">reset_enable_multilingual_support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction">reset_fallback_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">reset_supported_language_codes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_language_code` <a name="reset_default_language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```python
def reset_default_language_code() -> None
```

##### `reset_enable_multilingual_support` <a name="reset_enable_multilingual_support" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```python
def reset_enable_multilingual_support() -> None
```

##### `reset_fallback_action` <a name="reset_fallback_action" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```python
def reset_fallback_action() -> None
```

##### `reset_supported_language_codes` <a name="reset_supported_language_codes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```python
def reset_supported_language_codes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">default_language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">enable_multilingual_support_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput">fallback_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">supported_language_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode">default_language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">enable_multilingual_support</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction">fallback_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">supported_language_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_language_code_input`<sup>Optional</sup> <a name="default_language_code_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```python
default_language_code_input: str
```

- *Type:* str

---

##### `enable_multilingual_support_input`<sup>Optional</sup> <a name="enable_multilingual_support_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```python
enable_multilingual_support_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fallback_action_input`<sup>Optional</sup> <a name="fallback_action_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```python
fallback_action_input: str
```

- *Type:* str

---

##### `supported_language_codes_input`<sup>Optional</sup> <a name="supported_language_codes_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```python
supported_language_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_language_code`<sup>Required</sup> <a name="default_language_code" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```python
default_language_code: str
```

- *Type:* str

---

##### `enable_multilingual_support`<sup>Required</sup> <a name="enable_multilingual_support" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```python
enable_multilingual_support: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fallback_action`<sup>Required</sup> <a name="fallback_action" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

---

##### `supported_language_codes`<sup>Required</sup> <a name="supported_language_codes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```python
supported_language_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLanguageSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---


### GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">reset_gcs_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">reset_gcs_path_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gcs_bucket` <a name="reset_gcs_bucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```python
def reset_gcs_bucket() -> None
```

##### `reset_gcs_path_prefix` <a name="reset_gcs_path_prefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```python
def reset_gcs_path_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">gcs_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">gcs_path_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">gcs_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">gcs_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gcs_bucket_input`<sup>Optional</sup> <a name="gcs_bucket_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```python
gcs_bucket_input: str
```

- *Type:* str

---

##### `gcs_path_prefix_input`<sup>Optional</sup> <a name="gcs_path_prefix_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```python
gcs_path_prefix_input: str
```

- *Type:* str

---

##### `gcs_bucket`<sup>Required</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```python
gcs_bucket: str
```

- *Type:* str

---

##### `gcs_path_prefix`<sup>Required</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```python
gcs_path_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---


### GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">reset_project</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset` <a name="reset_dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```python
def reset_project() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---


### GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">reset_enable_cloud_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_cloud_logging` <a name="reset_enable_cloud_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```python
def reset_enable_cloud_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">enable_cloud_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cloud_logging_input`<sup>Optional</sup> <a name="enable_cloud_logging_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```python
enable_cloud_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_cloud_logging`<sup>Required</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```python
enable_cloud_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">reset_disable_conversation_logging</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_conversation_logging` <a name="reset_disable_conversation_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```python
def reset_disable_conversation_logging() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">disable_conversation_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">disable_conversation_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_conversation_logging_input`<sup>Optional</sup> <a name="disable_conversation_logging_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```python
disable_conversation_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disable_conversation_logging`<sup>Required</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```python
disable_conversation_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig">put_audio_recording_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings">put_bigquery_export_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings">put_cloud_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings">put_conversation_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig">put_redaction_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">reset_audio_recording_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">reset_bigquery_export_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">reset_cloud_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">reset_conversation_logging_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig">reset_redaction_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audio_recording_config` <a name="put_audio_recording_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```python
def put_audio_recording_config(
  gcs_bucket: str = None,
  gcs_path_prefix: str = None
) -> None
```

###### `gcs_bucket`<sup>Optional</sup> <a name="gcs_bucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.gcsBucket"></a>

- *Type:* str

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_bucket GoogleCesApp#gcs_bucket}

---

###### `gcs_path_prefix`<sup>Optional</sup> <a name="gcs_path_prefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.gcsPathPrefix"></a>

- *Type:* str

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_path_prefix GoogleCesApp#gcs_path_prefix}

---

##### `put_bigquery_export_settings` <a name="put_bigquery_export_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```python
def put_bigquery_export_settings(
  dataset: str = None,
  enabled: bool | IResolvable = None,
  project: str = None
) -> None
```

###### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.dataset"></a>

- *Type:* str

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#dataset GoogleCesApp#dataset}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enabled GoogleCesApp#enabled}

---

###### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.project"></a>

- *Type:* str

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}

---

##### `put_cloud_logging_settings` <a name="put_cloud_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```python
def put_cloud_logging_settings(
  enable_cloud_logging: bool | IResolvable = None
) -> None
```

###### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.enableCloudLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_cloud_logging GoogleCesApp#enable_cloud_logging}

---

##### `put_conversation_logging_settings` <a name="put_conversation_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```python
def put_conversation_logging_settings(
  disable_conversation_logging: bool | IResolvable = None
) -> None
```

###### `disable_conversation_logging`<sup>Optional</sup> <a name="disable_conversation_logging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.disableConversationLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_conversation_logging GoogleCesApp#disable_conversation_logging}

---

##### `put_redaction_config` <a name="put_redaction_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```python
def put_redaction_config(
  deidentify_template: str = None,
  enable_redaction: bool | IResolvable = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deidentify_template GoogleCesApp#deidentify_template}

---

###### `enable_redaction`<sup>Optional</sup> <a name="enable_redaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.enableRedaction"></a>

- *Type:* bool | cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_redaction GoogleCesApp#enable_redaction}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.inspectTemplate"></a>

- *Type:* str

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inspect_template GoogleCesApp#inspect_template}

---

##### `reset_audio_recording_config` <a name="reset_audio_recording_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```python
def reset_audio_recording_config() -> None
```

##### `reset_bigquery_export_settings` <a name="reset_bigquery_export_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```python
def reset_bigquery_export_settings() -> None
```

##### `reset_cloud_logging_settings` <a name="reset_cloud_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```python
def reset_cloud_logging_settings() -> None
```

##### `reset_conversation_logging_settings` <a name="reset_conversation_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```python
def reset_conversation_logging_settings() -> None
```

##### `reset_redaction_config` <a name="reset_redaction_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```python
def reset_redaction_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig">audio_recording_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">bigquery_export_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">cloud_logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">conversation_logging_settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig">redaction_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">audio_recording_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">bigquery_export_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">cloud_logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">conversation_logging_settings_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput">redaction_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_recording_config`<sup>Required</sup> <a name="audio_recording_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```python
audio_recording_config: GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `bigquery_export_settings`<sup>Required</sup> <a name="bigquery_export_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```python
bigquery_export_settings: GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `cloud_logging_settings`<sup>Required</sup> <a name="cloud_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```python
cloud_logging_settings: GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `conversation_logging_settings`<sup>Required</sup> <a name="conversation_logging_settings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```python
conversation_logging_settings: GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `redaction_config`<sup>Required</sup> <a name="redaction_config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```python
redaction_config: GoogleCesAppLoggingSettingsRedactionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `audio_recording_config_input`<sup>Optional</sup> <a name="audio_recording_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```python
audio_recording_config_input: GoogleCesAppLoggingSettingsAudioRecordingConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `bigquery_export_settings_input`<sup>Optional</sup> <a name="bigquery_export_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```python
bigquery_export_settings_input: GoogleCesAppLoggingSettingsBigqueryExportSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `cloud_logging_settings_input`<sup>Optional</sup> <a name="cloud_logging_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```python
cloud_logging_settings_input: GoogleCesAppLoggingSettingsCloudLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `conversation_logging_settings_input`<sup>Optional</sup> <a name="conversation_logging_settings_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```python
conversation_logging_settings_input: GoogleCesAppLoggingSettingsConversationLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `redaction_config_input`<sup>Optional</sup> <a name="redaction_config_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```python
redaction_config_input: GoogleCesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsRedactionConfigOutputReference <a name="GoogleCesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">reset_enable_redaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_enable_redaction` <a name="reset_enable_redaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```python
def reset_enable_redaction() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">enable_redaction_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">enable_redaction</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `enable_redaction_input`<sup>Optional</sup> <a name="enable_redaction_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```python
enable_redaction_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `enable_redaction`<sup>Required</sup> <a name="enable_redaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```python
enable_redaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppLoggingSettingsRedactionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---


### GoogleCesAppModelSettingsOutputReference <a name="GoogleCesAppModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppModelSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---


### GoogleCesAppTimeoutsOutputReference <a name="GoogleCesAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAppTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---


### GoogleCesAppTimeZoneSettingsOutputReference <a name="GoogleCesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppTimeZoneSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---


### GoogleCesAppVariableDeclarationsList <a name="GoogleCesAppVariableDeclarationsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppVariableDeclarationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCesAppVariableDeclarationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GoogleCesAppVariableDeclarations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>]

---


### GoogleCesAppVariableDeclarationsOutputReference <a name="GoogleCesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppVariableDeclarationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema">put_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schema` <a name="put_schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema"></a>

```python
def put_schema(
  type: str,
  additional_properties: str = None,
  any_of: str = None,
  default: str = None,
  defs: str = None,
  description: str = None,
  enum: typing.List[str] = None,
  items: str = None,
  nullable: bool | IResolvable = None,
  prefix_items: str = None,
  properties: str = None,
  ref: str = None,
  required: typing.List[str] = None,
  title: str = None,
  unique_items: bool | IResolvable = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.type"></a>

- *Type:* str

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#type GoogleCesApp#type}

---

###### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.additionalProperties"></a>

- *Type:* str

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#additional_properties GoogleCesApp#additional_properties}

---

###### `any_of`<sup>Optional</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.anyOf"></a>

- *Type:* str

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#any_of GoogleCesApp#any_of}

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.default"></a>

- *Type:* str

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default GoogleCesApp#default}

---

###### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.defs"></a>

- *Type:* str

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#defs GoogleCesApp#defs}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.description"></a>

- *Type:* str

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

###### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.enum"></a>

- *Type:* typing.List[str]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enum GoogleCesApp#enum}

---

###### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.items"></a>

- *Type:* str

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#items GoogleCesApp#items}

---

###### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.nullable"></a>

- *Type:* bool | cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#nullable GoogleCesApp#nullable}

---

###### `prefix_items`<sup>Optional</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.prefixItems"></a>

- *Type:* str

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prefix_items GoogleCesApp#prefix_items}

---

###### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.properties"></a>

- *Type:* str

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#properties GoogleCesApp#properties}

---

###### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.ref"></a>

- *Type:* str

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ref GoogleCesApp#ref}

---

###### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.required"></a>

- *Type:* typing.List[str]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#required GoogleCesApp#required}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.title"></a>

- *Type:* str

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#title GoogleCesApp#title}

---

###### `unique_items`<sup>Optional</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.uniqueItems"></a>

- *Type:* bool | cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#unique_items GoogleCesApp#unique_items}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput">schema_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema"></a>

```python
schema: GoogleCesAppVariableDeclarationsSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```python
schema_input: GoogleCesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleCesAppVariableDeclarations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>

---


### GoogleCesAppVariableDeclarationsSchemaOutputReference <a name="GoogleCesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_ces_app

googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">reset_any_of</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs">reset_defs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum">reset_enum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems">reset_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable">reset_nullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">reset_prefix_items</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef">reset_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired">reset_required</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">reset_unique_items</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_any_of` <a name="reset_any_of" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```python
def reset_any_of() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_defs` <a name="reset_defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```python
def reset_defs() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enum` <a name="reset_enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```python
def reset_enum() -> None
```

##### `reset_items` <a name="reset_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```python
def reset_items() -> None
```

##### `reset_nullable` <a name="reset_nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```python
def reset_nullable() -> None
```

##### `reset_prefix_items` <a name="reset_prefix_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```python
def reset_prefix_items() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_ref` <a name="reset_ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```python
def reset_ref() -> None
```

##### `reset_required` <a name="reset_required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_unique_items` <a name="reset_unique_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```python
def reset_unique_items() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">any_of_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput">defs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput">enum_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">nullable_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">prefix_items_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput">ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">required_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">unique_items_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">additional_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf">any_of</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs">defs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum">enum</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items">items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable">nullable</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">prefix_items</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required">required</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">unique_items</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: str
```

- *Type:* str

---

##### `any_of_input`<sup>Optional</sup> <a name="any_of_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```python
any_of_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `defs_input`<sup>Optional</sup> <a name="defs_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```python
defs_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enum_input`<sup>Optional</sup> <a name="enum_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```python
enum_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```python
items_input: str
```

- *Type:* str

---

##### `nullable_input`<sup>Optional</sup> <a name="nullable_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```python
nullable_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items_input`<sup>Optional</sup> <a name="prefix_items_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```python
prefix_items_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `ref_input`<sup>Optional</sup> <a name="ref_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```python
ref_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```python
required_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unique_items_input`<sup>Optional</sup> <a name="unique_items_input" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```python
unique_items_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```python
additional_properties: str
```

- *Type:* str

---

##### `any_of`<sup>Required</sup> <a name="any_of" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```python
any_of: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```python
defs: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```python
enum: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```python
items: str
```

- *Type:* str

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```python
nullable: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `prefix_items`<sup>Required</sup> <a name="prefix_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```python
prefix_items: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```python
required: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_items`<sup>Required</sup> <a name="unique_items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```python
unique_items: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCesAppVariableDeclarationsSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---



