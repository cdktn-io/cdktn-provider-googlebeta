# `googleFirebaseAiLogicPromptTemplateLock` Submodule <a name="`googleFirebaseAiLogicPromptTemplateLock` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicPromptTemplateLock <a name="GoogleFirebaseAiLogicPromptTemplateLock" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock google_firebase_ai_logic_prompt_template_lock}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLock;

GoogleFirebaseAiLogicPromptTemplateLock.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .templateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .regionalPropagationDisabled(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleFirebaseAiLogicPromptTemplateLockTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.templateId">templateId</a></code> | <code>java.lang.String</code> | The ID of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.regionalPropagationDisabled">regionalPropagationDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | For the 'global' location only. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#location GoogleFirebaseAiLogicPromptTemplateLock#location}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.templateId"></a>

- *Type:* java.lang.String

The ID of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#template_id GoogleFirebaseAiLogicPromptTemplateLock#template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#deletion_policy GoogleFirebaseAiLogicPromptTemplateLock#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}.

---

##### `regionalPropagationDisabled`<sup>Optional</sup> <a name="regionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.regionalPropagationDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

For the 'global' location only.

If true, the modifyLock operation will
apply to the global region only. Otherwise, the operation will also
propagate to all applicable regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#regional_propagation_disabled GoogleFirebaseAiLogicPromptTemplateLock#regional_propagation_disabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#timeouts GoogleFirebaseAiLogicPromptTemplateLock#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetRegionalPropagationDisabled">resetRegionalPropagationDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts"></a>

```java
public void putTimeouts(GoogleFirebaseAiLogicPromptTemplateLockTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegionalPropagationDisabled` <a name="resetRegionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetRegionalPropagationDisabled"></a>

```java
public void resetRegionalPropagationDisabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLock;

GoogleFirebaseAiLogicPromptTemplateLock.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLock;

GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLock;

GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLock;

GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicPromptTemplateLock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleFirebaseAiLogicPromptTemplateLock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleFirebaseAiLogicPromptTemplateLock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicPromptTemplateLock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked">locked</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabledInput">regionalPropagationDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput">templateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabled">regionalPropagationDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId">templateId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locked"></a>

```java
public IResolvable getLocked();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeouts"></a>

```java
public GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference">GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionalPropagationDisabledInput`<sup>Optional</sup> <a name="regionalPropagationDisabledInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRegionalPropagationDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateIdInput"></a>

```java
public java.lang.String getTemplateIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.timeoutsInput"></a>

```java
public IResolvable|GoogleFirebaseAiLogicPromptTemplateLockTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `regionalPropagationDisabled`<sup>Required</sup> <a name="regionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.regionalPropagationDisabled"></a>

```java
public java.lang.Boolean|IResolvable getRegionalPropagationDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicPromptTemplateLockConfig <a name="GoogleFirebaseAiLogicPromptTemplateLockConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLockConfig;

GoogleFirebaseAiLogicPromptTemplateLockConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .templateId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .regionalPropagationDisabled(java.lang.Boolean|IResolvable)
//  .timeouts(GoogleFirebaseAiLogicPromptTemplateLockTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId">templateId</a></code> | <code>java.lang.String</code> | The ID of the prompt template. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.regionalPropagationDisabled">regionalPropagationDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | For the 'global' location only. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#location GoogleFirebaseAiLogicPromptTemplateLock#location}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.templateId"></a>

```java
public java.lang.String getTemplateId();
```

- *Type:* java.lang.String

The ID of the prompt template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#template_id GoogleFirebaseAiLogicPromptTemplateLock#template_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#deletion_policy GoogleFirebaseAiLogicPromptTemplateLock#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#id GoogleFirebaseAiLogicPromptTemplateLock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#project GoogleFirebaseAiLogicPromptTemplateLock#project}.

---

##### `regionalPropagationDisabled`<sup>Optional</sup> <a name="regionalPropagationDisabled" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.regionalPropagationDisabled"></a>

```java
public java.lang.Boolean|IResolvable getRegionalPropagationDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

For the 'global' location only.

If true, the modifyLock operation will
apply to the global region only. Otherwise, the operation will also
propagate to all applicable regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#regional_propagation_disabled GoogleFirebaseAiLogicPromptTemplateLock#regional_propagation_disabled}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockConfig.property.timeouts"></a>

```java
public GoogleFirebaseAiLogicPromptTemplateLockTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#timeouts GoogleFirebaseAiLogicPromptTemplateLock#timeouts}

---

### GoogleFirebaseAiLogicPromptTemplateLockTimeouts <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts;

GoogleFirebaseAiLogicPromptTemplateLockTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#create GoogleFirebaseAiLogicPromptTemplateLock#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_prompt_template_lock#delete GoogleFirebaseAiLogicPromptTemplateLock#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference <a name="GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_firebase_ai_logic_prompt_template_lock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference;

new GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleFirebaseAiLogicPromptTemplateLockTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicPromptTemplateLock.GoogleFirebaseAiLogicPromptTemplateLockTimeouts">GoogleFirebaseAiLogicPromptTemplateLockTimeouts</a>

---



