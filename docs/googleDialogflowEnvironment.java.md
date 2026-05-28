# `googleDialogflowEnvironment` Submodule <a name="`googleDialogflowEnvironment` Submodule" id="@cdktn/provider-google-beta.googleDialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowEnvironment <a name="GoogleDialogflowEnvironment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironment;

GoogleDialogflowEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentid(java.lang.String)
//  .agentVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .fulfillment(GoogleDialogflowEnvironmentFulfillment)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .textToSpeechSettings(GoogleDialogflowEnvironmentTextToSpeechSettings)
//  .timeouts(GoogleDialogflowEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.environmentid">environmentid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.environmentid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.agentVersion"></a>

- *Type:* java.lang.String

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#agent_version GoogleDialogflowEnvironment#agent_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#deletion_policy GoogleDialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#description GoogleDialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.fulfillment"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#fulfillment GoogleDialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}.

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.textToSpeechSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#text_to_speech_settings GoogleDialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#timeouts GoogleDialogflowEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment">putFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings">putTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment">resetFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings">resetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFulfillment` <a name="putFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment"></a>

```java
public void putFulfillment(GoogleDialogflowEnvironmentFulfillment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `putTextToSpeechSettings` <a name="putTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings"></a>

```java
public void putTextToSpeechSettings(GoogleDialogflowEnvironmentTextToSpeechSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts"></a>

```java
public void putTimeouts(GoogleDialogflowEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetAgentVersion"></a>

```java
public void resetAgentVersion()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFulfillment` <a name="resetFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetFulfillment"></a>

```java
public void resetFulfillment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTextToSpeechSettings` <a name="resetTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTextToSpeechSettings"></a>

```java
public void resetTextToSpeechSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironment;

GoogleDialogflowEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironment;

GoogleDialogflowEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironment;

GoogleDialogflowEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironment;

GoogleDialogflowEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDialogflowEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDialogflowEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput">agentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput">environmentidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput">fulfillmentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput">textToSpeechSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid">environmentid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fulfillment`<sup>Required</sup> <a name="fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillment"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentOutputReference getFulfillment();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference">GoogleDialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `textToSpeechSettings`<sup>Required</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettings"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference getTextToSpeechSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeouts"></a>

```java
public GoogleDialogflowEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference">GoogleDialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersionInput"></a>

```java
public java.lang.String getAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentidInput`<sup>Optional</sup> <a name="environmentidInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentidInput"></a>

```java
public java.lang.String getEnvironmentidInput();
```

- *Type:* java.lang.String

---

##### `fulfillmentInput`<sup>Optional</sup> <a name="fulfillmentInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.fulfillmentInput"></a>

```java
public GoogleDialogflowEnvironmentFulfillment getFulfillmentInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `textToSpeechSettingsInput`<sup>Optional</sup> <a name="textToSpeechSettingsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettings getTextToSpeechSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDialogflowEnvironmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.environmentid"></a>

```java
public java.lang.String getEnvironmentid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowEnvironmentConfig <a name="GoogleDialogflowEnvironmentConfig" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentConfig;

GoogleDialogflowEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentid(java.lang.String)
//  .agentVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .fulfillment(GoogleDialogflowEnvironmentFulfillment)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .textToSpeechSettings(GoogleDialogflowEnvironmentTextToSpeechSettings)
//  .timeouts(GoogleDialogflowEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid">environmentid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.environmentid"></a>

```java
public java.lang.String getEnvironmentid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#environmentid GoogleDialogflowEnvironment#environmentid}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#agent_version GoogleDialogflowEnvironment#agent_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#deletion_policy GoogleDialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#description GoogleDialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.fulfillment"></a>

```java
public GoogleDialogflowEnvironmentFulfillment getFulfillment();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#fulfillment GoogleDialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#id GoogleDialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#location GoogleDialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#project GoogleDialogflowEnvironment#project}.

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettings getTextToSpeechSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#text_to_speech_settings GoogleDialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentConfig.property.timeouts"></a>

```java
public GoogleDialogflowEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#timeouts GoogleDialogflowEnvironment#timeouts}

---

### GoogleDialogflowEnvironmentFulfillment <a name="GoogleDialogflowEnvironmentFulfillment" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillment;

GoogleDialogflowEnvironmentFulfillment.builder()
//  .displayName(java.lang.String)
//  .features(IResolvable|java.util.List<GoogleDialogflowEnvironmentFulfillmentFeatures>)
//  .genericWebService(GoogleDialogflowEnvironmentFulfillmentGenericWebService)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features">features</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>></code> | features block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#display_name GoogleDialogflowEnvironment#display_name}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.features"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentFulfillmentFeatures> getFeatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#features GoogleDialogflowEnvironment#features}

---

##### `genericWebService`<sup>Optional</sup> <a name="genericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.genericWebService"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentGenericWebService getGenericWebService();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#generic_web_service GoogleDialogflowEnvironment#generic_web_service}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

### GoogleDialogflowEnvironmentFulfillmentFeatures <a name="GoogleDialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentFeatures;

GoogleDialogflowEnvironmentFulfillmentFeatures.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type">type</a></code> | <code>java.lang.String</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#type GoogleDialogflowEnvironment#type}

---

### GoogleDialogflowEnvironmentFulfillmentGenericWebService <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentGenericWebService;

GoogleDialogflowEnvironmentFulfillmentGenericWebService.builder()
    .uri(java.lang.String)
//  .password(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri">uri</a></code> | <code>java.lang.String</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password">password</a></code> | <code>java.lang.String</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username">username</a></code> | <code>java.lang.String</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#uri GoogleDialogflowEnvironment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#password GoogleDialogflowEnvironment#password}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#request_headers GoogleDialogflowEnvironment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#username GoogleDialogflowEnvironment#username}

---

### GoogleDialogflowEnvironmentTextToSpeechSettings <a name="GoogleDialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettings;

GoogleDialogflowEnvironmentTextToSpeechSettings.builder()
//  .enableTextToSpeech(java.lang.Boolean|IResolvable)
//  .outputAudioEncoding(java.lang.String)
//  .sampleRateHertz(java.lang.Number)
//  .synthesizeSpeechConfigs(IResolvable|java.util.List<GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>java.lang.String</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | synthesize_speech_configs block. |

---

##### `enableTextToSpeech`<sup>Optional</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeech();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#enable_text_to_speech GoogleDialogflowEnvironment#enable_text_to_speech}

---

##### `outputAudioEncoding`<sup>Optional</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```java
public java.lang.String getOutputAudioEncoding();
```

- *Type:* java.lang.String

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#output_audio_encoding GoogleDialogflowEnvironment#output_audio_encoding}

---

##### `sampleRateHertz`<sup>Optional</sup> <a name="sampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#sample_rate_hertz GoogleDialogflowEnvironment#sample_rate_hertz}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getSynthesizeSpeechConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#synthesize_speech_configs GoogleDialogflowEnvironment#synthesize_speech_configs}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs;

GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.builder()
    .language(java.lang.String)
//  .effectsProfileId(java.util.List<java.lang.String>)
//  .pitch(java.lang.Number)
//  .speakingRate(java.lang.Number)
//  .voice(GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice)
//  .volumeGainDb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">effectsProfileId</a></code> | <code>java.util.List<java.lang.String></code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">pitch</a></code> | <code>java.lang.Number</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#language GoogleDialogflowEnvironment#language}.

---

##### `effectsProfileId`<sup>Optional</sup> <a name="effectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileId();
```

- *Type:* java.util.List<java.lang.String>

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#effects_profile_id GoogleDialogflowEnvironment#effects_profile_id}

---

##### `pitch`<sup>Optional</sup> <a name="pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```java
public java.lang.Number getPitch();
```

- *Type:* java.lang.Number

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#pitch GoogleDialogflowEnvironment#pitch}

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#speaking_rate GoogleDialogflowEnvironment#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getVoice();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#voice GoogleDialogflowEnvironment#voice}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#volume_gain_db GoogleDialogflowEnvironment#volume_gain_db}

---

### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;

GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.builder()
//  .name(java.lang.String)
//  .ssmlGender(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">name</a></code> | <code>java.lang.String</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">ssmlGender</a></code> | <code>java.lang.String</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#name GoogleDialogflowEnvironment#name}

---

##### `ssmlGender`<sup>Optional</sup> <a name="ssmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```java
public java.lang.String getSsmlGender();
```

- *Type:* java.lang.String

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#ssml_gender GoogleDialogflowEnvironment#ssml_gender}

---

### GoogleDialogflowEnvironmentTimeouts <a name="GoogleDialogflowEnvironmentTimeouts" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTimeouts;

GoogleDialogflowEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#create GoogleDialogflowEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#delete GoogleDialogflowEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_dialogflow_environment#update GoogleDialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowEnvironmentFulfillmentFeaturesList <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentFeaturesList;

new GoogleDialogflowEnvironmentFulfillmentFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentFulfillmentFeatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>>

---


### GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference;

new GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowEnvironmentFulfillmentFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>

---


### GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference;

new GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentGenericWebService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---


### GoogleDialogflowEnvironmentFulfillmentOutputReference <a name="GoogleDialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentFulfillmentOutputReference;

new GoogleDialogflowEnvironmentFulfillmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">putGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">resetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatures` <a name="putFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```java
public void putFeatures(IResolvable|java.util.List<GoogleDialogflowEnvironmentFulfillmentFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>>

---

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```java
public void putGenericWebService(GoogleDialogflowEnvironmentFulfillmentGenericWebService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetGenericWebService` <a name="resetGenericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```java
public void resetGenericWebService()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features">features</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">featuresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentFeaturesList getFeatures();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeaturesList">GoogleDialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference getGenericWebService();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">GoogleDialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentFulfillmentFeatures> getFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentFeatures">GoogleDialogflowEnvironmentFulfillmentFeatures</a>>

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```java
public GoogleDialogflowEnvironmentFulfillmentGenericWebService getGenericWebServiceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentGenericWebService">GoogleDialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowEnvironmentFulfillment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentFulfillment">GoogleDialogflowEnvironmentFulfillment</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference;

new GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">resetEnableTextToSpeech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">resetOutputAudioEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">resetSampleRateHertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```java
public void putSynthesizeSpeechConfigs(IResolvable|java.util.List<GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---

##### `resetEnableTextToSpeech` <a name="resetEnableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```java
public void resetEnableTextToSpeech()
```

##### `resetOutputAudioEncoding` <a name="resetOutputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```java
public void resetOutputAudioEncoding()
```

##### `resetSampleRateHertz` <a name="resetSampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```java
public void resetSampleRateHertz()
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```java
public void resetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">enableTextToSpeechInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">outputAudioEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">sampleRateHertzInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList getSynthesizeSpeechConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `enableTextToSpeechInput`<sup>Optional</sup> <a name="enableTextToSpeechInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeechInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outputAudioEncodingInput`<sup>Optional</sup> <a name="outputAudioEncodingInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```java
public java.lang.String getOutputAudioEncodingInput();
```

- *Type:* java.lang.String

---

##### `sampleRateHertzInput`<sup>Optional</sup> <a name="sampleRateHertzInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```java
public java.lang.Number getSampleRateHertzInput();
```

- *Type:* java.lang.Number

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getSynthesizeSpeechConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---

##### `enableTextToSpeech`<sup>Required</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeech();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outputAudioEncoding`<sup>Required</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```java
public java.lang.String getOutputAudioEncoding();
```

- *Type:* java.lang.String

---

##### `sampleRateHertz`<sup>Required</sup> <a name="sampleRateHertz" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettings">GoogleDialogflowEnvironmentTextToSpeechSettings</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList;

new GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference;

new GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">putVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">resetEffectsProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">resetPitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVoice` <a name="putVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```java
public void putVoice(GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `resetEffectsProfileId` <a name="resetEffectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```java
public void resetEffectsProfileId()
```

##### `resetPitch` <a name="resetPitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```java
public void resetPitch()
```

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```java
public void resetSpeakingRate()
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```java
public void resetVoice()
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```java
public void resetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">effectsProfileIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">pitchInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">effectsProfileId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">pitch</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference getVoice();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `effectsProfileIdInput`<sup>Optional</sup> <a name="effectsProfileIdInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `pitchInput`<sup>Optional</sup> <a name="pitchInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```java
public java.lang.Number getPitchInput();
```

- *Type:* java.lang.Number

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```java
public java.lang.Number getSpeakingRateInput();
```

- *Type:* java.lang.Number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getVoiceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```java
public java.lang.Number getVolumeGainDbInput();
```

- *Type:* java.lang.Number

---

##### `effectsProfileId`<sup>Required</sup> <a name="effectsProfileId" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `pitch`<sup>Required</sup> <a name="pitch" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```java
public java.lang.Number getPitch();
```

- *Type:* java.lang.Number

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>

---


### GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference;

new GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">resetSsmlGender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSsmlGender` <a name="resetSsmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```java
public void resetSsmlGender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">ssmlGenderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">ssmlGender</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ssmlGenderInput`<sup>Optional</sup> <a name="ssmlGenderInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```java
public java.lang.String getSsmlGenderInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ssmlGender`<sup>Required</sup> <a name="ssmlGender" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```java
public java.lang.String getSsmlGender();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```java
public GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">GoogleDialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### GoogleDialogflowEnvironmentTimeoutsOutputReference <a name="GoogleDialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dialogflow_environment.GoogleDialogflowEnvironmentTimeoutsOutputReference;

new GoogleDialogflowEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDialogflowEnvironmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDialogflowEnvironment.GoogleDialogflowEnvironmentTimeouts">GoogleDialogflowEnvironmentTimeouts</a>

---



