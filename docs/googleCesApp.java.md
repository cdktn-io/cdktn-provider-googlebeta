# `googleCesApp` Submodule <a name="`googleCesApp` Submodule" id="@cdktn/provider-google-beta.googleCesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesApp <a name="GoogleCesApp" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesApp;

GoogleCesApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioProcessingConfig(GoogleCesAppAudioProcessingConfig)
//  .clientCertificateSettings(GoogleCesAppClientCertificateSettings)
//  .dataStoreSettings(GoogleCesAppDataStoreSettings)
//  .defaultChannelProfile(GoogleCesAppDefaultChannelProfile)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .evaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholds)
//  .globalInstruction(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .languageSettings(GoogleCesAppLanguageSettings)
//  .loggingSettings(GoogleCesAppLoggingSettings)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .modelSettings(GoogleCesAppModelSettings)
//  .pinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .rootAgent(java.lang.String)
//  .timeouts(GoogleCesAppTimeouts)
//  .timeZoneSettings(GoogleCesAppTimeZoneSettings)
//  .toolExecutionMode(java.lang.String)
//  .variableDeclarations(IResolvable|java.util.List<GoogleCesAppVariableDeclarations>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.variableDeclarations">variableDeclarations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>></code> | variable_declarations block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#app_id GoogleCesApp#app_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#display_name GoogleCesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#location GoogleCesApp#location}

---

##### `audioProcessingConfig`<sup>Optional</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.audioProcessingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_processing_config GoogleCesApp#audio_processing_config}

---

##### `clientCertificateSettings`<sup>Optional</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.clientCertificateSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#client_certificate_settings GoogleCesApp#client_certificate_settings}

---

##### `dataStoreSettings`<sup>Optional</sup> <a name="dataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.dataStoreSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#data_store_settings GoogleCesApp#data_store_settings}

---

##### `defaultChannelProfile`<sup>Optional</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.defaultChannelProfile"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_channel_profile GoogleCesApp#default_channel_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

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

- *Type:* java.lang.String

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `evaluationMetricsThresholds`<sup>Optional</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.evaluationMetricsThresholds"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#evaluation_metrics_thresholds GoogleCesApp#evaluation_metrics_thresholds}

---

##### `globalInstruction`<sup>Optional</sup> <a name="globalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.globalInstruction"></a>

- *Type:* java.lang.String

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#global_instruction GoogleCesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.guardrails"></a>

- *Type:* java.util.List<java.lang.String>

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#guardrails GoogleCesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageSettings`<sup>Optional</sup> <a name="languageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.languageSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_settings GoogleCesApp#language_settings}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.loggingSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#logging_settings GoogleCesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#metadata GoogleCesApp#metadata}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model_settings GoogleCesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.pinned"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#pinned GoogleCesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}.

---

##### `rootAgent`<sup>Optional</sup> <a name="rootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.rootAgent"></a>

- *Type:* java.lang.String

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#root_agent GoogleCesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#timeouts GoogleCesApp#timeouts}

---

##### `timeZoneSettings`<sup>Optional</sup> <a name="timeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.timeZoneSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone_settings GoogleCesApp#time_zone_settings}

---

##### `toolExecutionMode`<sup>Optional</sup> <a name="toolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.toolExecutionMode"></a>

- *Type:* java.lang.String

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_execution_mode GoogleCesApp#tool_execution_mode}

---

##### `variableDeclarations`<sup>Optional</sup> <a name="variableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.variableDeclarations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>>

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#variable_declarations GoogleCesApp#variable_declarations}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig">putAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings">putClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings">putDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile">putDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds">putEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings">putLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings">putLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings">putTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations">putVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig">resetAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings">resetClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings">resetDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile">resetDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds">resetEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction">resetGlobalInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings">resetLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings">resetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned">resetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent">resetRootAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings">resetTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode">resetToolExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations">resetVariableDeclarations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAudioProcessingConfig` <a name="putAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig"></a>

```java
public void putAudioProcessingConfig(GoogleCesAppAudioProcessingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---

##### `putClientCertificateSettings` <a name="putClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings"></a>

```java
public void putClientCertificateSettings(GoogleCesAppClientCertificateSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---

##### `putDataStoreSettings` <a name="putDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings"></a>

```java
public void putDataStoreSettings(GoogleCesAppDataStoreSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---

##### `putDefaultChannelProfile` <a name="putDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile"></a>

```java
public void putDefaultChannelProfile(GoogleCesAppDefaultChannelProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---

##### `putEvaluationMetricsThresholds` <a name="putEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds"></a>

```java
public void putEvaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---

##### `putLanguageSettings` <a name="putLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings"></a>

```java
public void putLanguageSettings(GoogleCesAppLanguageSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---

##### `putLoggingSettings` <a name="putLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings"></a>

```java
public void putLoggingSettings(GoogleCesAppLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings"></a>

```java
public void putModelSettings(GoogleCesAppModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts"></a>

```java
public void putTimeouts(GoogleCesAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---

##### `putTimeZoneSettings` <a name="putTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings"></a>

```java
public void putTimeZoneSettings(GoogleCesAppTimeZoneSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---

##### `putVariableDeclarations` <a name="putVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations"></a>

```java
public void putVariableDeclarations(IResolvable|java.util.List<GoogleCesAppVariableDeclarations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>>

---

##### `resetAudioProcessingConfig` <a name="resetAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig"></a>

```java
public void resetAudioProcessingConfig()
```

##### `resetClientCertificateSettings` <a name="resetClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings"></a>

```java
public void resetClientCertificateSettings()
```

##### `resetDataStoreSettings` <a name="resetDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings"></a>

```java
public void resetDataStoreSettings()
```

##### `resetDefaultChannelProfile` <a name="resetDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile"></a>

```java
public void resetDefaultChannelProfile()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEvaluationMetricsThresholds` <a name="resetEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds"></a>

```java
public void resetEvaluationMetricsThresholds()
```

##### `resetGlobalInstruction` <a name="resetGlobalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction"></a>

```java
public void resetGlobalInstruction()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId"></a>

```java
public void resetId()
```

##### `resetLanguageSettings` <a name="resetLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings"></a>

```java
public void resetLanguageSettings()
```

##### `resetLoggingSettings` <a name="resetLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings"></a>

```java
public void resetLoggingSettings()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings"></a>

```java
public void resetModelSettings()
```

##### `resetPinned` <a name="resetPinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned"></a>

```java
public void resetPinned()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject"></a>

```java
public void resetProject()
```

##### `resetRootAgent` <a name="resetRootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent"></a>

```java
public void resetRootAgent()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimeZoneSettings` <a name="resetTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings"></a>

```java
public void resetTimeZoneSettings()
```

##### `resetToolExecutionMode` <a name="resetToolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode"></a>

```java
public void resetToolExecutionMode()
```

##### `resetVariableDeclarations` <a name="resetVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations"></a>

```java
public void resetVariableDeclarations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesApp;

GoogleCesApp.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesApp;

GoogleCesApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesApp;

GoogleCesApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesApp;

GoogleCesApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleCesApp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleCesApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleCesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount">deploymentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations">variableDeclarations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput">audioProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput">clientCertificateSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput">dataStoreSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput">defaultChannelProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput">evaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput">globalInstructionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput">guardrailsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput">languageSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput">loggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput">pinnedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput">rootAgentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput">timeZoneSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput">toolExecutionModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput">variableDeclarationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `audioProcessingConfig`<sup>Required</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig"></a>

```java
public GoogleCesAppAudioProcessingConfigOutputReference getAudioProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a>

---

##### `clientCertificateSettings`<sup>Required</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings"></a>

```java
public GoogleCesAppClientCertificateSettingsOutputReference getClientCertificateSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dataStoreSettings`<sup>Required</sup> <a name="dataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings"></a>

```java
public GoogleCesAppDataStoreSettingsOutputReference getDataStoreSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a>

---

##### `defaultChannelProfile`<sup>Required</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile"></a>

```java
public GoogleCesAppDefaultChannelProfileOutputReference getDefaultChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a>

---

##### `deploymentCount`<sup>Required</sup> <a name="deploymentCount" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount"></a>

```java
public java.lang.Number getDeploymentCount();
```

- *Type:* java.lang.Number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `evaluationMetricsThresholds`<sup>Required</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsOutputReference getEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `languageSettings`<sup>Required</sup> <a name="languageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings"></a>

```java
public GoogleCesAppLanguageSettingsOutputReference getLanguageSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a>

---

##### `loggingSettings`<sup>Required</sup> <a name="loggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings"></a>

```java
public GoogleCesAppLoggingSettingsOutputReference getLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings"></a>

```java
public GoogleCesAppModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts"></a>

```java
public GoogleCesAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a>

---

##### `timeZoneSettings`<sup>Required</sup> <a name="timeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings"></a>

```java
public GoogleCesAppTimeZoneSettingsOutputReference getTimeZoneSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `variableDeclarations`<sup>Required</sup> <a name="variableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations"></a>

```java
public GoogleCesAppVariableDeclarationsList getVariableDeclarations();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `audioProcessingConfigInput`<sup>Optional</sup> <a name="audioProcessingConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput"></a>

```java
public GoogleCesAppAudioProcessingConfig getAudioProcessingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---

##### `clientCertificateSettingsInput`<sup>Optional</sup> <a name="clientCertificateSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput"></a>

```java
public GoogleCesAppClientCertificateSettings getClientCertificateSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---

##### `dataStoreSettingsInput`<sup>Optional</sup> <a name="dataStoreSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput"></a>

```java
public GoogleCesAppDataStoreSettings getDataStoreSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---

##### `defaultChannelProfileInput`<sup>Optional</sup> <a name="defaultChannelProfileInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput"></a>

```java
public GoogleCesAppDefaultChannelProfile getDefaultChannelProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `evaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="evaluationMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput"></a>

```java
public GoogleCesAppEvaluationMetricsThresholds getEvaluationMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---

##### `globalInstructionInput`<sup>Optional</sup> <a name="globalInstructionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput"></a>

```java
public java.lang.String getGlobalInstructionInput();
```

- *Type:* java.lang.String

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput"></a>

```java
public java.util.List<java.lang.String> getGuardrailsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `languageSettingsInput`<sup>Optional</sup> <a name="languageSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput"></a>

```java
public GoogleCesAppLanguageSettings getLanguageSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingSettingsInput`<sup>Optional</sup> <a name="loggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput"></a>

```java
public GoogleCesAppLoggingSettings getLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput"></a>

```java
public GoogleCesAppModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---

##### `pinnedInput`<sup>Optional</sup> <a name="pinnedInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput"></a>

```java
public java.lang.Boolean|IResolvable getPinnedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rootAgentInput`<sup>Optional</sup> <a name="rootAgentInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput"></a>

```java
public java.lang.String getRootAgentInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput"></a>

```java
public IResolvable|GoogleCesAppTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---

##### `timeZoneSettingsInput`<sup>Optional</sup> <a name="timeZoneSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput"></a>

```java
public GoogleCesAppTimeZoneSettings getTimeZoneSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---

##### `toolExecutionModeInput`<sup>Optional</sup> <a name="toolExecutionModeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput"></a>

```java
public java.lang.String getToolExecutionModeInput();
```

- *Type:* java.lang.String

---

##### `variableDeclarationsInput`<sup>Optional</sup> <a name="variableDeclarationsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAppVariableDeclarations> getVariableDeclarationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `globalInstruction`<sup>Required</sup> <a name="globalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction"></a>

```java
public java.lang.String getGlobalInstruction();
```

- *Type:* java.lang.String

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pinned`<sup>Required</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rootAgent`<sup>Required</sup> <a name="rootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent"></a>

```java
public java.lang.String getRootAgent();
```

- *Type:* java.lang.String

---

##### `toolExecutionMode`<sup>Required</sup> <a name="toolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode"></a>

```java
public java.lang.String getToolExecutionMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAppAudioProcessingConfig <a name="GoogleCesAppAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfig;

GoogleCesAppAudioProcessingConfig.builder()
//  .ambientSoundConfig(GoogleCesAppAudioProcessingConfigAmbientSoundConfig)
//  .bargeInConfig(GoogleCesAppAudioProcessingConfigBargeInConfig)
//  .inactivityTimeout(java.lang.String)
//  .synthesizeSpeechConfigs(IResolvable|java.util.List<GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout">inactivityTimeout</a></code> | <code>java.lang.String</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | synthesize_speech_configs block. |

---

##### `ambientSoundConfig`<sup>Optional</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```java
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig getAmbientSoundConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ambient_sound_config GoogleCesApp#ambient_sound_config}

---

##### `bargeInConfig`<sup>Optional</sup> <a name="bargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig"></a>

```java
public GoogleCesAppAudioProcessingConfigBargeInConfig getBargeInConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_config GoogleCesApp#barge_in_config}

---

##### `inactivityTimeout`<sup>Optional</sup> <a name="inactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```java
public java.lang.String getInactivityTimeout();
```

- *Type:* java.lang.String

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inactivity_timeout GoogleCesApp#inactivity_timeout}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```java
public IResolvable|java.util.List<GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs> getSynthesizeSpeechConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#synthesize_speech_configs GoogleCesApp#synthesize_speech_configs}

---

### GoogleCesAppAudioProcessingConfigAmbientSoundConfig <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigAmbientSoundConfig;

GoogleCesAppAudioProcessingConfigAmbientSoundConfig.builder()
//  .gcsUri(java.lang.String)
//  .prebuiltAmbientSound(java.lang.String)
//  .volumeGainDb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>java.lang.String</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `gcsUri`<sup>Optional</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_uri GoogleCesApp#gcs_uri}

---

##### `prebuiltAmbientSound`<sup>Optional</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```java
public java.lang.String getPrebuiltAmbientSound();
```

- *Type:* java.lang.String

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prebuilt_ambient_sound GoogleCesApp#prebuilt_ambient_sound}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#volume_gain_db GoogleCesApp#volume_gain_db}

---

### GoogleCesAppAudioProcessingConfigBargeInConfig <a name="GoogleCesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigBargeInConfig;

GoogleCesAppAudioProcessingConfigBargeInConfig.builder()
//  .bargeInAwareness(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">bargeInAwareness</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `bargeInAwareness`<sup>Optional</sup> <a name="bargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwareness();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_awareness GoogleCesApp#barge_in_awareness}

---

### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs;

GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.builder()
    .languageCode(java.lang.String)
//  .speakingRate(java.lang.Number)
//  .voice(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code>java.lang.String</code> | The name of the voice. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}.

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#speaking_rate GoogleCesApp#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```java
public java.lang.String getVoice();
```

- *Type:* java.lang.String

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#voice GoogleCesApp#voice}

---

### GoogleCesAppClientCertificateSettings <a name="GoogleCesAppClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppClientCertificateSettings;

GoogleCesAppClientCertificateSettings.builder()
    .privateKey(java.lang.String)
    .tlsCertificate(java.lang.String)
//  .passphrase(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#private_key GoogleCesApp#private_key}

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tls_certificate GoogleCesApp#tls_certificate}

---

##### `passphrase`<sup>Optional</sup> <a name="passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#passphrase GoogleCesApp#passphrase}

---

### GoogleCesAppConfig <a name="GoogleCesAppConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppConfig;

GoogleCesAppConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .appId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .audioProcessingConfig(GoogleCesAppAudioProcessingConfig)
//  .clientCertificateSettings(GoogleCesAppClientCertificateSettings)
//  .dataStoreSettings(GoogleCesAppDataStoreSettings)
//  .defaultChannelProfile(GoogleCesAppDefaultChannelProfile)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .evaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholds)
//  .globalInstruction(java.lang.String)
//  .guardrails(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .languageSettings(GoogleCesAppLanguageSettings)
//  .loggingSettings(GoogleCesAppLoggingSettings)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .modelSettings(GoogleCesAppModelSettings)
//  .pinned(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .rootAgent(java.lang.String)
//  .timeouts(GoogleCesAppTimeouts)
//  .timeZoneSettings(GoogleCesAppTimeZoneSettings)
//  .toolExecutionMode(java.lang.String)
//  .variableDeclarations(IResolvable|java.util.List<GoogleCesAppVariableDeclarations>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig">audioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings">clientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings">dataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile">defaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds">evaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction">globalInstruction</a></code> | <code>java.lang.String</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails">guardrails</a></code> | <code>java.util.List<java.lang.String></code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings">languageSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings">loggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned">pinned</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent">rootAgent</a></code> | <code>java.lang.String</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings">timeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode">toolExecutionMode</a></code> | <code>java.lang.String</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations">variableDeclarations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>></code> | variable_declarations block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#app_id GoogleCesApp#app_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#display_name GoogleCesApp#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#location GoogleCesApp#location}

---

##### `audioProcessingConfig`<sup>Optional</sup> <a name="audioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig"></a>

```java
public GoogleCesAppAudioProcessingConfig getAudioProcessingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_processing_config GoogleCesApp#audio_processing_config}

---

##### `clientCertificateSettings`<sup>Optional</sup> <a name="clientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings"></a>

```java
public GoogleCesAppClientCertificateSettings getClientCertificateSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#client_certificate_settings GoogleCesApp#client_certificate_settings}

---

##### `dataStoreSettings`<sup>Optional</sup> <a name="dataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings"></a>

```java
public GoogleCesAppDataStoreSettings getDataStoreSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#data_store_settings GoogleCesApp#data_store_settings}

---

##### `defaultChannelProfile`<sup>Optional</sup> <a name="defaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile"></a>

```java
public GoogleCesAppDefaultChannelProfile getDefaultChannelProfile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_channel_profile GoogleCesApp#default_channel_profile}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

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

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `evaluationMetricsThresholds`<sup>Optional</sup> <a name="evaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholds getEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#evaluation_metrics_thresholds GoogleCesApp#evaluation_metrics_thresholds}

---

##### `globalInstruction`<sup>Optional</sup> <a name="globalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction"></a>

```java
public java.lang.String getGlobalInstruction();
```

- *Type:* java.lang.String

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#global_instruction GoogleCesApp#global_instruction}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails"></a>

```java
public java.util.List<java.lang.String> getGuardrails();
```

- *Type:* java.util.List<java.lang.String>

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#guardrails GoogleCesApp#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageSettings`<sup>Optional</sup> <a name="languageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings"></a>

```java
public GoogleCesAppLanguageSettings getLanguageSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_settings GoogleCesApp#language_settings}

---

##### `loggingSettings`<sup>Optional</sup> <a name="loggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings"></a>

```java
public GoogleCesAppLoggingSettings getLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#logging_settings GoogleCesApp#logging_settings}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#metadata GoogleCesApp#metadata}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings"></a>

```java
public GoogleCesAppModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model_settings GoogleCesApp#model_settings}

---

##### `pinned`<sup>Optional</sup> <a name="pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned"></a>

```java
public java.lang.Boolean|IResolvable getPinned();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#pinned GoogleCesApp#pinned}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}.

---

##### `rootAgent`<sup>Optional</sup> <a name="rootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent"></a>

```java
public java.lang.String getRootAgent();
```

- *Type:* java.lang.String

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#root_agent GoogleCesApp#root_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts"></a>

```java
public GoogleCesAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#timeouts GoogleCesApp#timeouts}

---

##### `timeZoneSettings`<sup>Optional</sup> <a name="timeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings"></a>

```java
public GoogleCesAppTimeZoneSettings getTimeZoneSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone_settings GoogleCesApp#time_zone_settings}

---

##### `toolExecutionMode`<sup>Optional</sup> <a name="toolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode"></a>

```java
public java.lang.String getToolExecutionMode();
```

- *Type:* java.lang.String

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_execution_mode GoogleCesApp#tool_execution_mode}

---

##### `variableDeclarations`<sup>Optional</sup> <a name="variableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations"></a>

```java
public IResolvable|java.util.List<GoogleCesAppVariableDeclarations> getVariableDeclarations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>>

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#variable_declarations GoogleCesApp#variable_declarations}

---

### GoogleCesAppDataStoreSettings <a name="GoogleCesAppDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDataStoreSettings;

GoogleCesAppDataStoreSettings.builder()
    .build();
```


### GoogleCesAppDataStoreSettingsEngines <a name="GoogleCesAppDataStoreSettingsEngines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDataStoreSettingsEngines;

GoogleCesAppDataStoreSettingsEngines.builder()
    .build();
```


### GoogleCesAppDefaultChannelProfile <a name="GoogleCesAppDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfile;

GoogleCesAppDefaultChannelProfile.builder()
//  .channelType(java.lang.String)
//  .disableBargeInControl(java.lang.Boolean|IResolvable)
//  .disableDtmf(java.lang.Boolean|IResolvable)
//  .personaProperty(GoogleCesAppDefaultChannelProfilePersonaProperty)
//  .profileId(java.lang.String)
//  .webWidgetConfig(GoogleCesAppDefaultChannelProfileWebWidgetConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType">channelType</a></code> | <code>java.lang.String</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#channel_type GoogleCesApp#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_barge_in_control GoogleCesApp#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_dtmf GoogleCesApp#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty"></a>

```java
public GoogleCesAppDefaultChannelProfilePersonaProperty getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona_property GoogleCesApp#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#profile_id GoogleCesApp#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```java
public GoogleCesAppDefaultChannelProfileWebWidgetConfig getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_config GoogleCesApp#web_widget_config}

---

### GoogleCesAppDefaultChannelProfilePersonaProperty <a name="GoogleCesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfilePersonaProperty;

GoogleCesAppDefaultChannelProfilePersonaProperty.builder()
//  .persona(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>java.lang.String</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona GoogleCesApp#persona}

---

### GoogleCesAppDefaultChannelProfileWebWidgetConfig <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfileWebWidgetConfig;

GoogleCesAppDefaultChannelProfileWebWidgetConfig.builder()
//  .modality(java.lang.String)
//  .theme(java.lang.String)
//  .webWidgetTitle(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>java.lang.String</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>java.lang.String</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#modality GoogleCesApp#modality}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#theme GoogleCesApp#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_title GoogleCesApp#web_widget_title}

---

### GoogleCesAppEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholds;

GoogleCesAppEvaluationMetricsThresholds.builder()
//  .goldenEvaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `goldenEvaluationMetricsThresholds`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getGoldenEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#golden_evaluation_metrics_thresholds GoogleCesApp#golden_evaluation_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;

GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.builder()
//  .expectationLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds)
//  .turnLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `expectationLevelMetricsThresholds`<sup>Optional</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getExpectationLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#expectation_level_metrics_thresholds GoogleCesApp#expectation_level_metrics_thresholds}

---

##### `turnLevelMetricsThresholds`<sup>Optional</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getTurnLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#turn_level_metrics_thresholds GoogleCesApp#turn_level_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;

GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.builder()
//  .toolInvocationParameterCorrectnessThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThreshold();
```

- *Type:* java.lang.Number

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_invocation_parameter_correctness_threshold GoogleCesApp#tool_invocation_parameter_correctness_threshold}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;

GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.builder()
//  .overallToolInvocationCorrectnessThreshold(java.lang.Number)
//  .semanticSimilaritySuccessThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>java.lang.Number</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThreshold();
```

- *Type:* java.lang.Number

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#overall_tool_invocation_correctness_threshold GoogleCesApp#overall_tool_invocation_correctness_threshold}

---

##### `semanticSimilaritySuccessThreshold`<sup>Optional</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThreshold();
```

- *Type:* java.lang.Number

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#semantic_similarity_success_threshold GoogleCesApp#semantic_similarity_success_threshold}

---

### GoogleCesAppLanguageSettings <a name="GoogleCesAppLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLanguageSettings;

GoogleCesAppLanguageSettings.builder()
//  .defaultLanguageCode(java.lang.String)
//  .enableMultilingualSupport(java.lang.Boolean|IResolvable)
//  .fallbackAction(java.lang.String)
//  .supportedLanguageCodes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction">fallbackAction</a></code> | <code>java.lang.String</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>java.util.List<java.lang.String></code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `defaultLanguageCode`<sup>Optional</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_language_code GoogleCesApp#default_language_code}

---

##### `enableMultilingualSupport`<sup>Optional</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_multilingual_support GoogleCesApp#enable_multilingual_support}

---

##### `fallbackAction`<sup>Optional</sup> <a name="fallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction"></a>

```java
public java.lang.String getFallbackAction();
```

- *Type:* java.lang.String

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#fallback_action GoogleCesApp#fallback_action}

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodes();
```

- *Type:* java.util.List<java.lang.String>

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#supported_language_codes GoogleCesApp#supported_language_codes}

---

### GoogleCesAppLoggingSettings <a name="GoogleCesAppLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettings;

GoogleCesAppLoggingSettings.builder()
//  .audioRecordingConfig(GoogleCesAppLoggingSettingsAudioRecordingConfig)
//  .bigqueryExportSettings(GoogleCesAppLoggingSettingsBigqueryExportSettings)
//  .cloudLoggingSettings(GoogleCesAppLoggingSettingsCloudLoggingSettings)
//  .conversationLoggingSettings(GoogleCesAppLoggingSettingsConversationLoggingSettings)
//  .redactionConfig(GoogleCesAppLoggingSettingsRedactionConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `audioRecordingConfig`<sup>Optional</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig"></a>

```java
public GoogleCesAppLoggingSettingsAudioRecordingConfig getAudioRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_recording_config GoogleCesApp#audio_recording_config}

---

##### `bigqueryExportSettings`<sup>Optional</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings"></a>

```java
public GoogleCesAppLoggingSettingsBigqueryExportSettings getBigqueryExportSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#bigquery_export_settings GoogleCesApp#bigquery_export_settings}

---

##### `cloudLoggingSettings`<sup>Optional</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings"></a>

```java
public GoogleCesAppLoggingSettingsCloudLoggingSettings getCloudLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#cloud_logging_settings GoogleCesApp#cloud_logging_settings}

---

##### `conversationLoggingSettings`<sup>Optional</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings"></a>

```java
public GoogleCesAppLoggingSettingsConversationLoggingSettings getConversationLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#conversation_logging_settings GoogleCesApp#conversation_logging_settings}

---

##### `redactionConfig`<sup>Optional</sup> <a name="redactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig"></a>

```java
public GoogleCesAppLoggingSettingsRedactionConfig getRedactionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#redaction_config GoogleCesApp#redaction_config}

---

### GoogleCesAppLoggingSettingsAudioRecordingConfig <a name="GoogleCesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsAudioRecordingConfig;

GoogleCesAppLoggingSettingsAudioRecordingConfig.builder()
//  .gcsBucket(java.lang.String)
//  .gcsPathPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>java.lang.String</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_bucket GoogleCesApp#gcs_bucket}

---

##### `gcsPathPrefix`<sup>Optional</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```java
public java.lang.String getGcsPathPrefix();
```

- *Type:* java.lang.String

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

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsBigqueryExportSettings;

GoogleCesAppLoggingSettingsBigqueryExportSettings.builder()
//  .dataset(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset">dataset</a></code> | <code>java.lang.String</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project">project</a></code> | <code>java.lang.String</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#dataset GoogleCesApp#dataset}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enabled GoogleCesApp#enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}

---

### GoogleCesAppLoggingSettingsCloudLoggingSettings <a name="GoogleCesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsCloudLoggingSettings;

GoogleCesAppLoggingSettingsCloudLoggingSettings.builder()
//  .enableCloudLogging(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `enableCloudLogging`<sup>Optional</sup> <a name="enableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_cloud_logging GoogleCesApp#enable_cloud_logging}

---

### GoogleCesAppLoggingSettingsConversationLoggingSettings <a name="GoogleCesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsConversationLoggingSettings;

GoogleCesAppLoggingSettingsConversationLoggingSettings.builder()
//  .disableConversationLogging(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">disableConversationLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |

---

##### `disableConversationLogging`<sup>Optional</sup> <a name="disableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_conversation_logging GoogleCesApp#disable_conversation_logging}

---

### GoogleCesAppLoggingSettingsRedactionConfig <a name="GoogleCesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsRedactionConfig;

GoogleCesAppLoggingSettingsRedactionConfig.builder()
//  .deidentifyTemplate(java.lang.String)
//  .enableRedaction(java.lang.Boolean|IResolvable)
//  .inspectTemplate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction">enableRedaction</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `deidentifyTemplate`<sup>Optional</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deidentify_template GoogleCesApp#deidentify_template}

---

##### `enableRedaction`<sup>Optional</sup> <a name="enableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedaction();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_redaction GoogleCesApp#enable_redaction}

---

##### `inspectTemplate`<sup>Optional</sup> <a name="inspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inspect_template GoogleCesApp#inspect_template}

---

### GoogleCesAppModelSettings <a name="GoogleCesAppModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppModelSettings;

GoogleCesAppModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model GoogleCesApp#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#temperature GoogleCesApp#temperature}

---

### GoogleCesAppTimeouts <a name="GoogleCesAppTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppTimeouts;

GoogleCesAppTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}.

---

### GoogleCesAppTimeZoneSettings <a name="GoogleCesAppTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppTimeZoneSettings;

GoogleCesAppTimeZoneSettings.builder()
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone GoogleCesApp#time_zone}

---

### GoogleCesAppVariableDeclarations <a name="GoogleCesAppVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppVariableDeclarations;

GoogleCesAppVariableDeclarations.builder()
    .description(java.lang.String)
    .name(java.lang.String)
    .schema(GoogleCesAppVariableDeclarationsSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description">description</a></code> | <code>java.lang.String</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name">name</a></code> | <code>java.lang.String</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#name GoogleCesApp#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema"></a>

```java
public GoogleCesAppVariableDeclarationsSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#schema GoogleCesApp#schema}

---

### GoogleCesAppVariableDeclarationsSchema <a name="GoogleCesAppVariableDeclarationsSchema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppVariableDeclarationsSchema;

GoogleCesAppVariableDeclarationsSchema.builder()
    .type(java.lang.String)
//  .additionalProperties(java.lang.String)
//  .anyOf(java.lang.String)
//  .default(java.lang.String)
//  .defs(java.lang.String)
//  .description(java.lang.String)
//  .enum(java.util.List<java.lang.String>)
//  .items(java.lang.String)
//  .nullable(java.lang.Boolean|IResolvable)
//  .prefixItems(java.lang.String)
//  .properties(java.lang.String)
//  .ref(java.lang.String)
//  .required(java.util.List<java.lang.String>)
//  .title(java.lang.String)
//  .uniqueItems(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type">type</a></code> | <code>java.lang.String</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties">additionalProperties</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf">anyOf</a></code> | <code>java.lang.String</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default">default</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs">defs</a></code> | <code>java.lang.String</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description">description</a></code> | <code>java.lang.String</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items">items</a></code> | <code>java.lang.String</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems">prefixItems</a></code> | <code>java.lang.String</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties">properties</a></code> | <code>java.lang.String</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref">ref</a></code> | <code>java.lang.String</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.required">required</a></code> | <code>java.util.List<java.lang.String></code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title">title</a></code> | <code>java.lang.String</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems">uniqueItems</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#type GoogleCesApp#type}

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```java
public java.lang.String getAdditionalProperties();
```

- *Type:* java.lang.String

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#additional_properties GoogleCesApp#additional_properties}

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf"></a>

```java
public java.lang.String getAnyOf();
```

- *Type:* java.lang.String

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#any_of GoogleCesApp#any_of}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default GoogleCesApp#default}

---

##### `defs`<sup>Optional</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs"></a>

```java
public java.lang.String getDefs();
```

- *Type:* java.lang.String

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#defs GoogleCesApp#defs}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enum GoogleCesApp#enum}

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items"></a>

```java
public java.lang.String getItems();
```

- *Type:* java.lang.String

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#items GoogleCesApp#items}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#nullable GoogleCesApp#nullable}

---

##### `prefixItems`<sup>Optional</sup> <a name="prefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems"></a>

```java
public java.lang.String getPrefixItems();
```

- *Type:* java.lang.String

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prefix_items GoogleCesApp#prefix_items}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#properties GoogleCesApp#properties}

---

##### `ref`<sup>Optional</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

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

```java
public java.util.List<java.lang.String> getRequired();
```

- *Type:* java.util.List<java.lang.String>

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#required GoogleCesApp#required}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#title GoogleCesApp#title}

---

##### `uniqueItems`<sup>Optional</sup> <a name="uniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItems();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#unique_items GoogleCesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference;

new GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">resetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">resetPrebuiltAmbientSound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsUri` <a name="resetGcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```java
public void resetGcsUri()
```

##### `resetPrebuiltAmbientSound` <a name="resetPrebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```java
public void resetPrebuiltAmbientSound()
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```java
public void resetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">gcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">prebuiltAmbientSoundInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">gcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">prebuiltAmbientSound</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsUriInput`<sup>Optional</sup> <a name="gcsUriInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```java
public java.lang.String getGcsUriInput();
```

- *Type:* java.lang.String

---

##### `prebuiltAmbientSoundInput`<sup>Optional</sup> <a name="prebuiltAmbientSoundInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```java
public java.lang.String getPrebuiltAmbientSoundInput();
```

- *Type:* java.lang.String

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```java
public java.lang.Number getVolumeGainDbInput();
```

- *Type:* java.lang.Number

---

##### `gcsUri`<sup>Required</sup> <a name="gcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```java
public java.lang.String getGcsUri();
```

- *Type:* java.lang.String

---

##### `prebuiltAmbientSound`<sup>Required</sup> <a name="prebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```java
public java.lang.String getPrebuiltAmbientSound();
```

- *Type:* java.lang.String

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference;

new GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">resetBargeInAwareness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBargeInAwareness` <a name="resetBargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```java
public void resetBargeInAwareness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">bargeInAwarenessInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">bargeInAwareness</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bargeInAwarenessInput`<sup>Optional</sup> <a name="bargeInAwarenessInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwarenessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `bargeInAwareness`<sup>Required</sup> <a name="bargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```java
public java.lang.Boolean|IResolvable getBargeInAwareness();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppAudioProcessingConfigBargeInConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---


### GoogleCesAppAudioProcessingConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigOutputReference;

new GoogleCesAppAudioProcessingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">putAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig">putBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">resetAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig">resetBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">resetInactivityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmbientSoundConfig` <a name="putAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```java
public void putAmbientSoundConfig(GoogleCesAppAudioProcessingConfigAmbientSoundConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `putBargeInConfig` <a name="putBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```java
public void putBargeInConfig(GoogleCesAppAudioProcessingConfigBargeInConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```java
public void putSynthesizeSpeechConfigs(IResolvable|java.util.List<GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---

##### `resetAmbientSoundConfig` <a name="resetAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```java
public void resetAmbientSoundConfig()
```

##### `resetBargeInConfig` <a name="resetBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```java
public void resetBargeInConfig()
```

##### `resetInactivityTimeout` <a name="resetInactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```java
public void resetInactivityTimeout()
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```java
public void resetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">ambientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig">bargeInConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">ambientSoundConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">bargeInConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">inactivityTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">inactivityTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ambientSoundConfig`<sup>Required</sup> <a name="ambientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```java
public GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference getAmbientSoundConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `bargeInConfig`<sup>Required</sup> <a name="bargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```java
public GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference getBargeInConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```java
public GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList getSynthesizeSpeechConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `ambientSoundConfigInput`<sup>Optional</sup> <a name="ambientSoundConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```java
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig getAmbientSoundConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `bargeInConfigInput`<sup>Optional</sup> <a name="bargeInConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```java
public GoogleCesAppAudioProcessingConfigBargeInConfig getBargeInConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---

##### `inactivityTimeoutInput`<sup>Optional</sup> <a name="inactivityTimeoutInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```java
public java.lang.String getInactivityTimeoutInput();
```

- *Type:* java.lang.String

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs> getSynthesizeSpeechConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---

##### `inactivityTimeout`<sup>Required</sup> <a name="inactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```java
public java.lang.String getInactivityTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppAudioProcessingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList;

new GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```java
public GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>>

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference;

new GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```java
public void resetSpeakingRate()
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```java
public void resetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```java
public java.lang.Number getSpeakingRateInput();
```

- *Type:* java.lang.Number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```java
public java.lang.String getVoiceInput();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```java
public java.lang.String getVoice();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### GoogleCesAppClientCertificateSettingsOutputReference <a name="GoogleCesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppClientCertificateSettingsOutputReference;

new GoogleCesAppClientCertificateSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase">resetPassphrase</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassphrase` <a name="resetPassphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```java
public void resetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput">passphraseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">tlsCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase">passphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate">tlsCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passphraseInput`<sup>Optional</sup> <a name="passphraseInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```java
public java.lang.String getPassphraseInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `tlsCertificateInput`<sup>Optional</sup> <a name="tlsCertificateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```java
public java.lang.String getTlsCertificateInput();
```

- *Type:* java.lang.String

---

##### `passphrase`<sup>Required</sup> <a name="passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```java
public java.lang.String getPassphrase();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `tlsCertificate`<sup>Required</sup> <a name="tlsCertificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```java
public java.lang.String getTlsCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppClientCertificateSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---


### GoogleCesAppDataStoreSettingsEnginesList <a name="GoogleCesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDataStoreSettingsEnginesList;

new GoogleCesAppDataStoreSettingsEnginesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get"></a>

```java
public GoogleCesAppDataStoreSettingsEnginesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleCesAppDataStoreSettingsEnginesOutputReference <a name="GoogleCesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDataStoreSettingsEnginesOutputReference;

new GoogleCesAppDataStoreSettingsEnginesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```java
public GoogleCesAppDataStoreSettingsEngines getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a>

---


### GoogleCesAppDataStoreSettingsOutputReference <a name="GoogleCesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDataStoreSettingsOutputReference;

new GoogleCesAppDataStoreSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines">engines</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `engines`<sup>Required</sup> <a name="engines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines"></a>

```java
public GoogleCesAppDataStoreSettingsEnginesList getEngines();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppDataStoreSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---


### GoogleCesAppDefaultChannelProfileOutputReference <a name="GoogleCesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfileOutputReference;

new GoogleCesAppDefaultChannelProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```java
public void putPersonaProperty(GoogleCesAppDefaultChannelProfilePersonaProperty value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```java
public void putWebWidgetConfig(GoogleCesAppDefaultChannelProfileWebWidgetConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```java
public void resetChannelType()
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```java
public void resetDisableBargeInControl()
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```java
public void resetDisableDtmf()
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```java
public void resetPersonaProperty()
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```java
public void resetWebWidgetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```java
public GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference getPersonaProperty();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```java
public GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference getWebWidgetConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```java
public java.lang.String getChannelTypeInput();
```

- *Type:* java.lang.String

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControlInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmfInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```java
public GoogleCesAppDefaultChannelProfilePersonaProperty getPersonaPropertyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```java
public GoogleCesAppDefaultChannelProfileWebWidgetConfig getWebWidgetConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```java
public java.lang.String getChannelType();
```

- *Type:* java.lang.String

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```java
public java.lang.Boolean|IResolvable getDisableBargeInControl();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```java
public java.lang.Boolean|IResolvable getDisableDtmf();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```java
public GoogleCesAppDefaultChannelProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---


### GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference;

new GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```java
public void resetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```java
public java.lang.String getPersonaInput();
```

- *Type:* java.lang.String

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```java
public java.lang.String getPersona();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```java
public GoogleCesAppDefaultChannelProfilePersonaProperty getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---


### GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference;

new GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```java
public void resetModality()
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```java
public void resetTheme()
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```java
public void resetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```java
public java.lang.String getModalityInput();
```

- *Type:* java.lang.String

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```java
public java.lang.String getThemeInput();
```

- *Type:* java.lang.String

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```java
public java.lang.String getWebWidgetTitleInput();
```

- *Type:* java.lang.String

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```java
public java.lang.String getModality();
```

- *Type:* java.lang.String

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```java
public java.lang.String getTheme();
```

- *Type:* java.lang.String

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```java
public java.lang.String getWebWidgetTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppDefaultChannelProfileWebWidgetConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">resetToolInvocationParameterCorrectnessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolInvocationParameterCorrectnessThreshold` <a name="resetToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```java
public void resetToolInvocationParameterCorrectnessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">toolInvocationParameterCorrectnessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">toolInvocationParameterCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `toolInvocationParameterCorrectnessThresholdInput`<sup>Optional</sup> <a name="toolInvocationParameterCorrectnessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `toolInvocationParameterCorrectnessThreshold`<sup>Required</sup> <a name="toolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```java
public java.lang.Number getToolInvocationParameterCorrectnessThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">putExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">putTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">resetExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">resetTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpectationLevelMetricsThresholds` <a name="putExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```java
public void putExpectationLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `putTurnLevelMetricsThresholds` <a name="putTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```java
public void putTurnLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `resetExpectationLevelMetricsThresholds` <a name="resetExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```java
public void resetExpectationLevelMetricsThresholds()
```

##### `resetTurnLevelMetricsThresholds` <a name="resetTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```java
public void resetTurnLevelMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">expectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">turnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">expectationLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">turnLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expectationLevelMetricsThresholds`<sup>Required</sup> <a name="expectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference getExpectationLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `turnLevelMetricsThresholds`<sup>Required</sup> <a name="turnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference getTurnLevelMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `expectationLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="expectationLevelMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds getExpectationLevelMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `turnLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="turnLevelMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getTurnLevelMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">resetOverallToolInvocationCorrectnessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">resetSemanticSimilaritySuccessThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOverallToolInvocationCorrectnessThreshold` <a name="resetOverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```java
public void resetOverallToolInvocationCorrectnessThreshold()
```

##### `resetSemanticSimilaritySuccessThreshold` <a name="resetSemanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```java
public void resetSemanticSimilaritySuccessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">overallToolInvocationCorrectnessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">semanticSimilaritySuccessThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">overallToolInvocationCorrectnessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">semanticSimilaritySuccessThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `overallToolInvocationCorrectnessThresholdInput`<sup>Optional</sup> <a name="overallToolInvocationCorrectnessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `semanticSimilaritySuccessThresholdInput`<sup>Optional</sup> <a name="semanticSimilaritySuccessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `overallToolInvocationCorrectnessThreshold`<sup>Required</sup> <a name="overallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```java
public java.lang.Number getOverallToolInvocationCorrectnessThreshold();
```

- *Type:* java.lang.Number

---

##### `semanticSimilaritySuccessThreshold`<sup>Required</sup> <a name="semanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```java
public java.lang.Number getSemanticSimilaritySuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppEvaluationMetricsThresholdsOutputReference;

new GoogleCesAppEvaluationMetricsThresholdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">putGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">resetGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoldenEvaluationMetricsThresholds` <a name="putGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```java
public void putGoldenEvaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `resetGoldenEvaluationMetricsThresholds` <a name="resetGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```java
public void resetGoldenEvaluationMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">goldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">goldenEvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `goldenEvaluationMetricsThresholds`<sup>Required</sup> <a name="goldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference getGoldenEvaluationMetricsThresholds();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `goldenEvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="goldenEvaluationMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```java
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds getGoldenEvaluationMetricsThresholdsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppEvaluationMetricsThresholds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---


### GoogleCesAppLanguageSettingsOutputReference <a name="GoogleCesAppLanguageSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLanguageSettingsOutputReference;

new GoogleCesAppLanguageSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">resetDefaultLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">resetEnableMultilingualSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction">resetFallbackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultLanguageCode` <a name="resetDefaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```java
public void resetDefaultLanguageCode()
```

##### `resetEnableMultilingualSupport` <a name="resetEnableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```java
public void resetEnableMultilingualSupport()
```

##### `resetFallbackAction` <a name="resetFallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```java
public void resetFallbackAction()
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```java
public void resetSupportedLanguageCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">enableMultilingualSupportInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput">fallbackActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">enableMultilingualSupport</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction">fallbackAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```java
public java.lang.String getDefaultLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `enableMultilingualSupportInput`<sup>Optional</sup> <a name="enableMultilingualSupportInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupportInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fallbackActionInput`<sup>Optional</sup> <a name="fallbackActionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```java
public java.lang.String getFallbackActionInput();
```

- *Type:* java.lang.String

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```java
public java.lang.String getDefaultLanguageCode();
```

- *Type:* java.lang.String

---

##### `enableMultilingualSupport`<sup>Required</sup> <a name="enableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```java
public java.lang.Boolean|IResolvable getEnableMultilingualSupport();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fallbackAction`<sup>Required</sup> <a name="fallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```java
public java.lang.String getFallbackAction();
```

- *Type:* java.lang.String

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```java
public java.util.List<java.lang.String> getSupportedLanguageCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLanguageSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---


### GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference;

new GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">resetGcsPathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```java
public void resetGcsBucket()
```

##### `resetGcsPathPrefix` <a name="resetGcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```java
public void resetGcsPathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">gcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">gcsPathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">gcsPathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```java
public java.lang.String getGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `gcsPathPrefixInput`<sup>Optional</sup> <a name="gcsPathPrefixInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```java
public java.lang.String getGcsPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `gcsPathPrefix`<sup>Required</sup> <a name="gcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```java
public java.lang.String getGcsPathPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettingsAudioRecordingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---


### GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference;

new GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">resetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">resetProject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataset` <a name="resetDataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```java
public void resetDataset()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```java
public void resetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettingsBigqueryExportSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---


### GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference;

new GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">resetEnableCloudLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableCloudLogging` <a name="resetEnableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```java
public void resetEnableCloudLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">enableCloudLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">enableCloudLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableCloudLoggingInput`<sup>Optional</sup> <a name="enableCloudLoggingInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableCloudLogging`<sup>Required</sup> <a name="enableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```java
public java.lang.Boolean|IResolvable getEnableCloudLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettingsCloudLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference;

new GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">resetDisableConversationLogging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableConversationLogging` <a name="resetDisableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```java
public void resetDisableConversationLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">disableConversationLoggingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">disableConversationLogging</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableConversationLoggingInput`<sup>Optional</sup> <a name="disableConversationLoggingInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLoggingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `disableConversationLogging`<sup>Required</sup> <a name="disableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```java
public java.lang.Boolean|IResolvable getDisableConversationLogging();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettingsConversationLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsOutputReference;

new GoogleCesAppLoggingSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig">putAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings">putBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings">putCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings">putConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig">putRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">resetAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">resetBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">resetCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">resetConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig">resetRedactionConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioRecordingConfig` <a name="putAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```java
public void putAudioRecordingConfig(GoogleCesAppLoggingSettingsAudioRecordingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `putBigqueryExportSettings` <a name="putBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```java
public void putBigqueryExportSettings(GoogleCesAppLoggingSettingsBigqueryExportSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `putCloudLoggingSettings` <a name="putCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```java
public void putCloudLoggingSettings(GoogleCesAppLoggingSettingsCloudLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `putConversationLoggingSettings` <a name="putConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```java
public void putConversationLoggingSettings(GoogleCesAppLoggingSettingsConversationLoggingSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `putRedactionConfig` <a name="putRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```java
public void putRedactionConfig(GoogleCesAppLoggingSettingsRedactionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---

##### `resetAudioRecordingConfig` <a name="resetAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```java
public void resetAudioRecordingConfig()
```

##### `resetBigqueryExportSettings` <a name="resetBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```java
public void resetBigqueryExportSettings()
```

##### `resetCloudLoggingSettings` <a name="resetCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```java
public void resetCloudLoggingSettings()
```

##### `resetConversationLoggingSettings` <a name="resetConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```java
public void resetConversationLoggingSettings()
```

##### `resetRedactionConfig` <a name="resetRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```java
public void resetRedactionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig">audioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">bigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">cloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">conversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig">redactionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">audioRecordingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">bigqueryExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">cloudLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">conversationLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput">redactionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audioRecordingConfig`<sup>Required</sup> <a name="audioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```java
public GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference getAudioRecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `bigqueryExportSettings`<sup>Required</sup> <a name="bigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```java
public GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference getBigqueryExportSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `cloudLoggingSettings`<sup>Required</sup> <a name="cloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```java
public GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference getCloudLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `conversationLoggingSettings`<sup>Required</sup> <a name="conversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```java
public GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference getConversationLoggingSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `redactionConfig`<sup>Required</sup> <a name="redactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```java
public GoogleCesAppLoggingSettingsRedactionConfigOutputReference getRedactionConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `audioRecordingConfigInput`<sup>Optional</sup> <a name="audioRecordingConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```java
public GoogleCesAppLoggingSettingsAudioRecordingConfig getAudioRecordingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `bigqueryExportSettingsInput`<sup>Optional</sup> <a name="bigqueryExportSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```java
public GoogleCesAppLoggingSettingsBigqueryExportSettings getBigqueryExportSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `cloudLoggingSettingsInput`<sup>Optional</sup> <a name="cloudLoggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```java
public GoogleCesAppLoggingSettingsCloudLoggingSettings getCloudLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `conversationLoggingSettingsInput`<sup>Optional</sup> <a name="conversationLoggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```java
public GoogleCesAppLoggingSettingsConversationLoggingSettings getConversationLoggingSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `redactionConfigInput`<sup>Optional</sup> <a name="redactionConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```java
public GoogleCesAppLoggingSettingsRedactionConfig getRedactionConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsRedactionConfigOutputReference <a name="GoogleCesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppLoggingSettingsRedactionConfigOutputReference;

new GoogleCesAppLoggingSettingsRedactionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">resetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">resetEnableRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">resetInspectTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeidentifyTemplate` <a name="resetDeidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```java
public void resetDeidentifyTemplate()
```

##### `resetEnableRedaction` <a name="resetEnableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```java
public void resetEnableRedaction()
```

##### `resetInspectTemplate` <a name="resetInspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```java
public void resetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">deidentifyTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">enableRedactionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">inspectTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">deidentifyTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">enableRedaction</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">inspectTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplateInput`<sup>Optional</sup> <a name="deidentifyTemplateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```java
public java.lang.String getDeidentifyTemplateInput();
```

- *Type:* java.lang.String

---

##### `enableRedactionInput`<sup>Optional</sup> <a name="enableRedactionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedactionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inspectTemplateInput`<sup>Optional</sup> <a name="inspectTemplateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```java
public java.lang.String getInspectTemplateInput();
```

- *Type:* java.lang.String

---

##### `deidentifyTemplate`<sup>Required</sup> <a name="deidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```java
public java.lang.String getDeidentifyTemplate();
```

- *Type:* java.lang.String

---

##### `enableRedaction`<sup>Required</sup> <a name="enableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```java
public java.lang.Boolean|IResolvable getEnableRedaction();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inspectTemplate`<sup>Required</sup> <a name="inspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```java
public java.lang.String getInspectTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```java
public GoogleCesAppLoggingSettingsRedactionConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---


### GoogleCesAppModelSettingsOutputReference <a name="GoogleCesAppModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppModelSettingsOutputReference;

new GoogleCesAppModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---


### GoogleCesAppTimeoutsOutputReference <a name="GoogleCesAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppTimeoutsOutputReference;

new GoogleCesAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAppTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---


### GoogleCesAppTimeZoneSettingsOutputReference <a name="GoogleCesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppTimeZoneSettingsOutputReference;

new GoogleCesAppTimeZoneSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```java
public GoogleCesAppTimeZoneSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---


### GoogleCesAppVariableDeclarationsList <a name="GoogleCesAppVariableDeclarationsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppVariableDeclarationsList;

new GoogleCesAppVariableDeclarationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get"></a>

```java
public GoogleCesAppVariableDeclarationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleCesAppVariableDeclarations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>>

---


### GoogleCesAppVariableDeclarationsOutputReference <a name="GoogleCesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppVariableDeclarationsOutputReference;

new GoogleCesAppVariableDeclarationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema">putSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchema` <a name="putSchema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema"></a>

```java
public void putSchema(GoogleCesAppVariableDeclarationsSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema"></a>

```java
public GoogleCesAppVariableDeclarationsSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```java
public GoogleCesAppVariableDeclarationsSchema getSchemaInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleCesAppVariableDeclarations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>

---


### GoogleCesAppVariableDeclarationsSchemaOutputReference <a name="GoogleCesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_ces_app.GoogleCesAppVariableDeclarationsSchemaOutputReference;

new GoogleCesAppVariableDeclarationsSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs">resetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems">resetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable">resetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">resetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef">resetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle">resetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">resetUniqueItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```java
public void resetAdditionalProperties()
```

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```

##### `resetDefault` <a name="resetDefault" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDefs` <a name="resetDefs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```java
public void resetDefs()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetItems` <a name="resetItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```java
public void resetItems()
```

##### `resetNullable` <a name="resetNullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```java
public void resetNullable()
```

##### `resetPrefixItems` <a name="resetPrefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```java
public void resetPrefixItems()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetRef` <a name="resetRef" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```java
public void resetRef()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```java
public void resetTitle()
```

##### `resetUniqueItems` <a name="resetUniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```java
public void resetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput">defsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput">enumInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">itemsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">nullableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">prefixItemsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">uniqueItemsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf">anyOf</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs">defs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum">enum</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items">items</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable">nullable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">prefixItems</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties">properties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required">required</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">uniqueItems</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```java
public java.lang.String getAdditionalPropertiesInput();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```java
public java.lang.String getAnyOfInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `defsInput`<sup>Optional</sup> <a name="defsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```java
public java.lang.String getDefsInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```java
public java.util.List<java.lang.String> getEnumInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```java
public java.lang.String getItemsInput();
```

- *Type:* java.lang.String

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```java
public java.lang.Boolean|IResolvable getNullableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixItemsInput`<sup>Optional</sup> <a name="prefixItemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```java
public java.lang.String getPrefixItemsInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```java
public java.lang.String getPropertiesInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```java
public java.util.List<java.lang.String> getRequiredInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `uniqueItemsInput`<sup>Optional</sup> <a name="uniqueItemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItemsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```java
public java.lang.String getAdditionalProperties();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```java
public java.lang.String getAnyOf();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `defs`<sup>Required</sup> <a name="defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```java
public java.lang.String getDefs();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```java
public java.util.List<java.lang.String> getEnum();
```

- *Type:* java.util.List<java.lang.String>

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```java
public java.lang.String getItems();
```

- *Type:* java.lang.String

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```java
public java.lang.Boolean|IResolvable getNullable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `prefixItems`<sup>Required</sup> <a name="prefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```java
public java.lang.String getPrefixItems();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```java
public java.util.List<java.lang.String> getRequired();
```

- *Type:* java.util.List<java.lang.String>

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uniqueItems`<sup>Required</sup> <a name="uniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```java
public java.lang.Boolean|IResolvable getUniqueItems();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```java
public GoogleCesAppVariableDeclarationsSchema getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---



