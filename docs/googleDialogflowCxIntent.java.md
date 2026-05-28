# `googleDialogflowCxIntent` Submodule <a name="`googleDialogflowCxIntent` Submodule" id="@cdktn/provider-google-beta.googleDialogflowCxIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxIntent <a name="GoogleDialogflowCxIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent google_dialogflow_cx_intent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntent;

GoogleDialogflowCxIntent.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefaultNegativeIntent(java.lang.Boolean|IResolvable)
//  .isDefaultWelcomeIntent(java.lang.Boolean|IResolvable)
//  .isFallback(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .languageCode(java.lang.String)
//  .parameters(IResolvable|java.util.List<GoogleDialogflowCxIntentParameters>)
//  .parent(java.lang.String)
//  .priority(java.lang.Number)
//  .timeouts(GoogleDialogflowCxIntentTimeouts)
//  .trainingPhrases(IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the intent, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isDefaultNegativeIntent">isDefaultNegativeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isDefaultWelcomeIntent">isDefaultWelcomeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isFallback">isFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The key/value metadata to label an intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>></code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.trainingPhrases">trainingPhrases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>></code> | training_phrases block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The human-readable name of the intent, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#display_name GoogleDialogflowCxIntent#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#deletion_policy GoogleDialogflowCxIntent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#description GoogleDialogflowCxIntent#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultNegativeIntent`<sup>Optional</sup> <a name="isDefaultNegativeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isDefaultNegativeIntent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_negative_intent = true' because they will compete to control a single Default Negative Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_default_negative_intent GoogleDialogflowCxIntent#is_default_negative_intent}

---

##### `isDefaultWelcomeIntent`<sup>Optional</sup> <a name="isDefaultWelcomeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isDefaultWelcomeIntent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_welcome_intent = true' because they will compete to control a single Default Welcome Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_default_welcome_intent GoogleDialogflowCxIntent#is_default_welcome_intent}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.isFallback"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether this is a fallback intent.

Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
To manage the fallback intent, set 'is_default_negative_intent = true'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_fallback GoogleDialogflowCxIntent#is_fallback}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The key/value metadata to label an intent.

Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#labels GoogleDialogflowCxIntent#labels}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.languageCode"></a>

- *Type:* java.lang.String

The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#language_code GoogleDialogflowCxIntent#language_code}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.parameters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parameters GoogleDialogflowCxIntent#parameters}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parent GoogleDialogflowCxIntent#parent}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#priority GoogleDialogflowCxIntent#priority}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#timeouts GoogleDialogflowCxIntent#timeouts}

---

##### `trainingPhrases`<sup>Optional</sup> <a name="trainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.Initializer.parameter.trainingPhrases"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>>

training_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#training_phrases GoogleDialogflowCxIntent#training_phrases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases">putTrainingPhrases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultNegativeIntent">resetIsDefaultNegativeIntent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultWelcomeIntent">resetIsDefaultWelcomeIntent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsFallback">resetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTrainingPhrases">resetTrainingPhrases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<GoogleDialogflowCxIntentParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowCxIntentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

---

##### `putTrainingPhrases` <a name="putTrainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases"></a>

```java
public void putTrainingPhrases(IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.putTrainingPhrases.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetId"></a>

```java
public void resetId()
```

##### `resetIsDefaultNegativeIntent` <a name="resetIsDefaultNegativeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultNegativeIntent"></a>

```java
public void resetIsDefaultNegativeIntent()
```

##### `resetIsDefaultWelcomeIntent` <a name="resetIsDefaultWelcomeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsDefaultWelcomeIntent"></a>

```java
public void resetIsDefaultWelcomeIntent()
```

##### `resetIsFallback` <a name="resetIsFallback" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetIsFallback"></a>

```java
public void resetIsFallback()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetParent"></a>

```java
public void resetParent()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrainingPhrases` <a name="resetTrainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.resetTrainingPhrases"></a>

```java
public void resetTrainingPhrases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowCxIntent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntent;

GoogleDialogflowCxIntent.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntent;

GoogleDialogflowCxIntent.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntent;

GoogleDialogflowCxIntent.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntent;

GoogleDialogflowCxIntent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowCxIntent.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDialogflowCxIntent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowCxIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowCxIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList">GoogleDialogflowCxIntentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference">GoogleDialogflowCxIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrases">trainingPhrases</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList">GoogleDialogflowCxIntentTrainingPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntentInput">isDefaultNegativeIntentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntentInput">isDefaultWelcomeIntentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallbackInput">isFallbackInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrasesInput">trainingPhrasesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntent">isDefaultNegativeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntent">isDefaultWelcomeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parameters"></a>

```java
public GoogleDialogflowCxIntentParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList">GoogleDialogflowCxIntentParametersList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeouts"></a>

```java
public GoogleDialogflowCxIntentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference">GoogleDialogflowCxIntentTimeoutsOutputReference</a>

---

##### `trainingPhrases`<sup>Required</sup> <a name="trainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrases"></a>

```java
public GoogleDialogflowCxIntentTrainingPhrasesList getTrainingPhrases();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList">GoogleDialogflowCxIntentTrainingPhrasesList</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isDefaultNegativeIntentInput`<sup>Optional</sup> <a name="isDefaultNegativeIntentInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntentInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNegativeIntentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDefaultWelcomeIntentInput`<sup>Optional</sup> <a name="isDefaultWelcomeIntentInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntentInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultWelcomeIntentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isFallbackInput`<sup>Optional</sup> <a name="isFallbackInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallbackInput"></a>

```java
public java.lang.Boolean|IResolvable getIsFallbackInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parametersInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDialogflowCxIntentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

---

##### `trainingPhrasesInput`<sup>Optional</sup> <a name="trainingPhrasesInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.trainingPhrasesInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases> getTrainingPhrasesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isDefaultNegativeIntent`<sup>Required</sup> <a name="isDefaultNegativeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultNegativeIntent"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNegativeIntent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDefaultWelcomeIntent`<sup>Required</sup> <a name="isDefaultWelcomeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isDefaultWelcomeIntent"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultWelcomeIntent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isFallback`<sup>Required</sup> <a name="isFallback" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.isFallback"></a>

```java
public java.lang.Boolean|IResolvable getIsFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntent.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxIntentConfig <a name="GoogleDialogflowCxIntentConfig" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentConfig;

GoogleDialogflowCxIntentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isDefaultNegativeIntent(java.lang.Boolean|IResolvable)
//  .isDefaultWelcomeIntent(java.lang.Boolean|IResolvable)
//  .isFallback(java.lang.Boolean|IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .languageCode(java.lang.String)
//  .parameters(IResolvable|java.util.List<GoogleDialogflowCxIntentParameters>)
//  .parent(java.lang.String)
//  .priority(java.lang.Number)
//  .timeouts(GoogleDialogflowCxIntentTimeouts)
//  .trainingPhrases(IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the intent, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultNegativeIntent">isDefaultNegativeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultWelcomeIntent">isDefaultWelcomeIntent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isFallback">isFallback</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The key/value metadata to label an intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>></code> | parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | The priority of this intent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.trainingPhrases">trainingPhrases</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>></code> | training_phrases block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the intent, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#display_name GoogleDialogflowCxIntent#display_name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#deletion_policy GoogleDialogflowCxIntent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#description GoogleDialogflowCxIntent#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultNegativeIntent`<sup>Optional</sup> <a name="isDefaultNegativeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultNegativeIntent"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultNegativeIntent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Marks this as the [Default Negative Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#negative) for an agent. When you create an agent, a Default Negative Intent is created automatically. The Default Negative Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_negative_intent = true' because they will compete to control a single Default Negative Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_default_negative_intent GoogleDialogflowCxIntent#is_default_negative_intent}

---

##### `isDefaultWelcomeIntent`<sup>Optional</sup> <a name="isDefaultWelcomeIntent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isDefaultWelcomeIntent"></a>

```java
public java.lang.Boolean|IResolvable getIsDefaultWelcomeIntent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Marks this as the [Default Welcome Intent](https://cloud.google.com/dialogflow/cx/docs/concept/intent#welcome) for an agent. When you create an agent, a Default Welcome Intent is created automatically. The Default Welcome Intent cannot be deleted; deleting the 'google_dialogflow_cx_intent' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_intent' resources linked to the same agent with 'is_default_welcome_intent = true' because they will compete to control a single Default Welcome Intent resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_default_welcome_intent GoogleDialogflowCxIntent#is_default_welcome_intent}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.isFallback"></a>

```java
public java.lang.Boolean|IResolvable getIsFallback();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether this is a fallback intent.

Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
To manage the fallback intent, set 'is_default_negative_intent = true'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_fallback GoogleDialogflowCxIntent#is_fallback}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The key/value metadata to label an intent.

Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#labels GoogleDialogflowCxIntent#labels}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#language_code GoogleDialogflowCxIntent#language_code}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parameters"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>>

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parameters GoogleDialogflowCxIntent#parameters}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parent GoogleDialogflowCxIntent#parent}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

The priority of this intent.

Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#priority GoogleDialogflowCxIntent#priority}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.timeouts"></a>

```java
public GoogleDialogflowCxIntentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#timeouts GoogleDialogflowCxIntent#timeouts}

---

##### `trainingPhrases`<sup>Optional</sup> <a name="trainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentConfig.property.trainingPhrases"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases> getTrainingPhrases();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>>

training_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#training_phrases GoogleDialogflowCxIntent#training_phrases}

---

### GoogleDialogflowCxIntentParameters <a name="GoogleDialogflowCxIntentParameters" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentParameters;

GoogleDialogflowCxIntentParameters.builder()
    .entityType(java.lang.String)
    .id(java.lang.String)
//  .isList(java.lang.Boolean|IResolvable)
//  .redact(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.entityType">entityType</a></code> | <code>java.lang.String</code> | The entity type of the parameter. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.id">id</a></code> | <code>java.lang.String</code> | The unique identifier of the parameter. This field is used by training phrases to annotate their parts. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.isList">isList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.redact">redact</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the parameter content should be redacted in log. |

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#entity_type GoogleDialogflowCxIntent#entity_type}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The unique identifier of the parameter. This field is used by training phrases to annotate their parts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#id GoogleDialogflowCxIntent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isList`<sup>Optional</sup> <a name="isList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.isList"></a>

```java
public java.lang.Boolean|IResolvable getIsList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#is_list GoogleDialogflowCxIntent#is_list}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters.property.redact"></a>

```java
public java.lang.Boolean|IResolvable getRedact();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging.
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#redact GoogleDialogflowCxIntent#redact}

---

### GoogleDialogflowCxIntentTimeouts <a name="GoogleDialogflowCxIntentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTimeouts;

GoogleDialogflowCxIntentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#create GoogleDialogflowCxIntent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#delete GoogleDialogflowCxIntent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#update GoogleDialogflowCxIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#create GoogleDialogflowCxIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#delete GoogleDialogflowCxIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#update GoogleDialogflowCxIntent#update}.

---

### GoogleDialogflowCxIntentTrainingPhrases <a name="GoogleDialogflowCxIntentTrainingPhrases" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrases;

GoogleDialogflowCxIntentTrainingPhrases.builder()
    .parts(IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrasesParts>)
//  .repeatCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.parts">parts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>></code> | parts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.repeatCount">repeatCount</a></code> | <code>java.lang.Number</code> | Indicates how many times this example was added to the intent. |

---

##### `parts`<sup>Required</sup> <a name="parts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.parts"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrasesParts> getParts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>>

parts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parts GoogleDialogflowCxIntent#parts}

---

##### `repeatCount`<sup>Optional</sup> <a name="repeatCount" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases.property.repeatCount"></a>

```java
public java.lang.Number getRepeatCount();
```

- *Type:* java.lang.Number

Indicates how many times this example was added to the intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#repeat_count GoogleDialogflowCxIntent#repeat_count}

---

### GoogleDialogflowCxIntentTrainingPhrasesParts <a name="GoogleDialogflowCxIntentTrainingPhrasesParts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrasesParts;

GoogleDialogflowCxIntentTrainingPhrasesParts.builder()
    .text(java.lang.String)
//  .parameterId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.text">text</a></code> | <code>java.lang.String</code> | The text for this part. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | The parameter used to annotate this part of the training phrase. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

The text for this part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#text GoogleDialogflowCxIntent#text}

---

##### `parameterId`<sup>Optional</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

The parameter used to annotate this part of the training phrase.

This field is required for annotated parts of the training phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_cx_intent#parameter_id GoogleDialogflowCxIntent#parameter_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxIntentParametersList <a name="GoogleDialogflowCxIntentParametersList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentParametersList;

new GoogleDialogflowCxIntentParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get"></a>

```java
public GoogleDialogflowCxIntentParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>>

---


### GoogleDialogflowCxIntentParametersOutputReference <a name="GoogleDialogflowCxIntentParametersOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentParametersOutputReference;

new GoogleDialogflowCxIntentParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetIsList">resetIsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetRedact">resetRedact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsList` <a name="resetIsList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetIsList"></a>

```java
public void resetIsList()
```

##### `resetRedact` <a name="resetRedact" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.resetRedact"></a>

```java
public void resetRedact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isListInput">isListInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redactInput">redactInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityType">entityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isList">isList</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redact">redact</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityTypeInput"></a>

```java
public java.lang.String getEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isListInput`<sup>Optional</sup> <a name="isListInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isListInput"></a>

```java
public java.lang.Boolean|IResolvable getIsListInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redactInput"></a>

```java
public java.lang.Boolean|IResolvable getRedactInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.entityType"></a>

```java
public java.lang.String getEntityType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isList`<sup>Required</sup> <a name="isList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.isList"></a>

```java
public java.lang.Boolean|IResolvable getIsList();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.redact"></a>

```java
public java.lang.Boolean|IResolvable getRedact();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxIntentParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentParameters">GoogleDialogflowCxIntentParameters</a>

---


### GoogleDialogflowCxIntentTimeoutsOutputReference <a name="GoogleDialogflowCxIntentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTimeoutsOutputReference;

new GoogleDialogflowCxIntentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxIntentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTimeouts">GoogleDialogflowCxIntentTimeouts</a>

---


### GoogleDialogflowCxIntentTrainingPhrasesList <a name="GoogleDialogflowCxIntentTrainingPhrasesList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrasesList;

new GoogleDialogflowCxIntentTrainingPhrasesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get"></a>

```java
public GoogleDialogflowCxIntentTrainingPhrasesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrases> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>>

---


### GoogleDialogflowCxIntentTrainingPhrasesOutputReference <a name="GoogleDialogflowCxIntentTrainingPhrasesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference;

new GoogleDialogflowCxIntentTrainingPhrasesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts">putParts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount">resetRepeatCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParts` <a name="putParts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts"></a>

```java
public void putParts(IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrasesParts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.putParts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>>

---

##### `resetRepeatCount` <a name="resetRepeatCount" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount"></a>

```java
public void resetRepeatCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.parts">parts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList">GoogleDialogflowCxIntentTrainingPhrasesPartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput">partsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput">repeatCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount">repeatCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parts`<sup>Required</sup> <a name="parts" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.parts"></a>

```java
public GoogleDialogflowCxIntentTrainingPhrasesPartsList getParts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList">GoogleDialogflowCxIntentTrainingPhrasesPartsList</a>

---

##### `partsInput`<sup>Optional</sup> <a name="partsInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrasesParts> getPartsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>>

---

##### `repeatCountInput`<sup>Optional</sup> <a name="repeatCountInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput"></a>

```java
public java.lang.Number getRepeatCountInput();
```

- *Type:* java.lang.Number

---

##### `repeatCount`<sup>Required</sup> <a name="repeatCount" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount"></a>

```java
public java.lang.Number getRepeatCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxIntentTrainingPhrases getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrases">GoogleDialogflowCxIntentTrainingPhrases</a>

---


### GoogleDialogflowCxIntentTrainingPhrasesPartsList <a name="GoogleDialogflowCxIntentTrainingPhrasesPartsList" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrasesPartsList;

new GoogleDialogflowCxIntentTrainingPhrasesPartsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get"></a>

```java
public GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowCxIntentTrainingPhrasesParts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>>

---


### GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference <a name="GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_cx_intent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference;

new GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId">resetParameterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterId` <a name="resetParameterId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId"></a>

```java
public void resetParameterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput">parameterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId">parameterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput"></a>

```java
public java.lang.String getParameterIdInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId"></a>

```java
public java.lang.String getParameterId();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowCxIntentTrainingPhrasesParts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowCxIntent.GoogleDialogflowCxIntentTrainingPhrasesParts">GoogleDialogflowCxIntentTrainingPhrasesParts</a>

---



