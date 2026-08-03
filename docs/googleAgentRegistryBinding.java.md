# `googleAgentRegistryBinding` Submodule <a name="`googleAgentRegistryBinding` Submodule" id="@cdktn/provider-google-beta.googleAgentRegistryBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAgentRegistryBinding <a name="GoogleAgentRegistryBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding google_agent_registry_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBinding;

GoogleAgentRegistryBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authProviderBinding(GoogleAgentRegistryBindingAuthProviderBinding)
    .bindingId(java.lang.String)
    .location(java.lang.String)
    .source(GoogleAgentRegistryBindingSource)
    .target(GoogleAgentRegistryBindingTarget)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleAgentRegistryBindingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.authProviderBinding">authProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.bindingId">bindingId</a></code> | <code>java.lang.String</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authProviderBinding`<sup>Required</sup> <a name="authProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.authProviderBinding"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.bindingId"></a>

- *Type:* java.lang.String

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding">putAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthProviderBinding` <a name="putAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding"></a>

```java
public void putAuthProviderBinding(GoogleAgentRegistryBindingAuthProviderBinding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putAuthProviderBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource"></a>

```java
public void putSource(GoogleAgentRegistryBindingSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget"></a>

```java
public void putTarget(GoogleAgentRegistryBindingTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts"></a>

```java
public void putTimeouts(GoogleAgentRegistryBindingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBinding;

GoogleAgentRegistryBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBinding;

GoogleAgentRegistryBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBinding;

GoogleAgentRegistryBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBinding;

GoogleAgentRegistryBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAgentRegistryBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleAgentRegistryBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAgentRegistryBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAgentRegistryBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAgentRegistryBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding">authProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput">authProviderBindingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput">bindingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput">targetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId">bindingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authProviderBinding`<sup>Required</sup> <a name="authProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBinding"></a>

```java
public GoogleAgentRegistryBindingAuthProviderBindingOutputReference getAuthProviderBinding();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference">GoogleAgentRegistryBindingAuthProviderBindingOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.source"></a>

```java
public GoogleAgentRegistryBindingSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference">GoogleAgentRegistryBindingSourceOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.target"></a>

```java
public GoogleAgentRegistryBindingTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference">GoogleAgentRegistryBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeouts"></a>

```java
public GoogleAgentRegistryBindingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference">GoogleAgentRegistryBindingTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `authProviderBindingInput`<sup>Optional</sup> <a name="authProviderBindingInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.authProviderBindingInput"></a>

```java
public GoogleAgentRegistryBindingAuthProviderBinding getAuthProviderBindingInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---

##### `bindingIdInput`<sup>Optional</sup> <a name="bindingIdInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingIdInput"></a>

```java
public java.lang.String getBindingIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.sourceInput"></a>

```java
public GoogleAgentRegistryBindingSource getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.targetInput"></a>

```java
public GoogleAgentRegistryBindingTarget getTargetInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.timeoutsInput"></a>

```java
public IResolvable|GoogleAgentRegistryBindingTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.bindingId"></a>

```java
public java.lang.String getBindingId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAgentRegistryBindingAuthProviderBinding <a name="GoogleAgentRegistryBindingAuthProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingAuthProviderBinding;

GoogleAgentRegistryBindingAuthProviderBinding.builder()
    .authProvider(java.lang.String)
//  .continueUri(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | The resource name of the target auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri">continueUri</a></code> | <code>java.lang.String</code> | The continue URI of the auth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | The list of OAuth2 scopes of the auth provider. |

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

The resource name of the target auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#auth_provider GoogleAgentRegistryBinding#auth_provider}

---

##### `continueUri`<sup>Optional</sup> <a name="continueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.continueUri"></a>

```java
public java.lang.String getContinueUri();
```

- *Type:* java.lang.String

The continue URI of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#continue_uri GoogleAgentRegistryBinding#continue_uri}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

The list of OAuth2 scopes of the auth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#scopes GoogleAgentRegistryBinding#scopes}

---

### GoogleAgentRegistryBindingConfig <a name="GoogleAgentRegistryBindingConfig" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingConfig;

GoogleAgentRegistryBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .authProviderBinding(GoogleAgentRegistryBindingAuthProviderBinding)
    .bindingId(java.lang.String)
    .location(java.lang.String)
    .source(GoogleAgentRegistryBindingSource)
    .target(GoogleAgentRegistryBindingTarget)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleAgentRegistryBindingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding">authProviderBinding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | auth_provider_binding block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId">bindingId</a></code> | <code>java.lang.String</code> | The name of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | User-defined display name for the Binding. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authProviderBinding`<sup>Required</sup> <a name="authProviderBinding" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.authProviderBinding"></a>

```java
public GoogleAgentRegistryBindingAuthProviderBinding getAuthProviderBinding();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

auth_provider_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#auth_provider_binding GoogleAgentRegistryBinding#auth_provider_binding}

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.bindingId"></a>

```java
public java.lang.String getBindingId();
```

- *Type:* java.lang.String

The name of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#binding_id GoogleAgentRegistryBinding#binding_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#location GoogleAgentRegistryBinding#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.source"></a>

```java
public GoogleAgentRegistryBindingSource getSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#source GoogleAgentRegistryBinding#source}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.target"></a>

```java
public GoogleAgentRegistryBindingTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#target GoogleAgentRegistryBinding#target}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#deletion_policy GoogleAgentRegistryBinding#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#description GoogleAgentRegistryBinding#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

User-defined display name for the Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#display_name GoogleAgentRegistryBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#id GoogleAgentRegistryBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#project GoogleAgentRegistryBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingConfig.property.timeouts"></a>

```java
public GoogleAgentRegistryBindingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#timeouts GoogleAgentRegistryBinding#timeouts}

---

### GoogleAgentRegistryBindingSource <a name="GoogleAgentRegistryBindingSource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingSource;

GoogleAgentRegistryBindingSource.builder()
    .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The identifier of the source Agent. Format: 'urn:agent:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTarget <a name="GoogleAgentRegistryBindingTarget" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingTarget;

GoogleAgentRegistryBindingTarget.builder()
    .identifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The identifier of the target Agent, MCP Server, or Endpoint. Format: * 'urn:agent:{publisher}:{namespace}:{name}' * 'urn:mcp:{publisher}:{namespace}:{name}' * 'urn:endpoint:{publisher}:{namespace}:{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#identifier GoogleAgentRegistryBinding#identifier}

---

### GoogleAgentRegistryBindingTimeouts <a name="GoogleAgentRegistryBindingTimeouts" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingTimeouts;

GoogleAgentRegistryBindingTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#create GoogleAgentRegistryBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#delete GoogleAgentRegistryBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_agent_registry_binding#update GoogleAgentRegistryBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAgentRegistryBindingAuthProviderBindingOutputReference <a name="GoogleAgentRegistryBindingAuthProviderBindingOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference;

new GoogleAgentRegistryBindingAuthProviderBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri">resetContinueUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinueUri` <a name="resetContinueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetContinueUri"></a>

```java
public void resetContinueUri()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.resetScopes"></a>

```java
public void resetScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput">authProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput">continueUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider">authProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri">continueUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authProviderInput`<sup>Optional</sup> <a name="authProviderInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProviderInput"></a>

```java
public java.lang.String getAuthProviderInput();
```

- *Type:* java.lang.String

---

##### `continueUriInput`<sup>Optional</sup> <a name="continueUriInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUriInput"></a>

```java
public java.lang.String getContinueUriInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authProvider`<sup>Required</sup> <a name="authProvider" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.authProvider"></a>

```java
public java.lang.String getAuthProvider();
```

- *Type:* java.lang.String

---

##### `continueUri`<sup>Required</sup> <a name="continueUri" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.continueUri"></a>

```java
public java.lang.String getContinueUri();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBindingOutputReference.property.internalValue"></a>

```java
public GoogleAgentRegistryBindingAuthProviderBinding getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingAuthProviderBinding">GoogleAgentRegistryBindingAuthProviderBinding</a>

---


### GoogleAgentRegistryBindingSourceOutputReference <a name="GoogleAgentRegistryBindingSourceOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingSourceOutputReference;

new GoogleAgentRegistryBindingSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSourceOutputReference.property.internalValue"></a>

```java
public GoogleAgentRegistryBindingSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingSource">GoogleAgentRegistryBindingSource</a>

---


### GoogleAgentRegistryBindingTargetOutputReference <a name="GoogleAgentRegistryBindingTargetOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingTargetOutputReference;

new GoogleAgentRegistryBindingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTargetOutputReference.property.internalValue"></a>

```java
public GoogleAgentRegistryBindingTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTarget">GoogleAgentRegistryBindingTarget</a>

---


### GoogleAgentRegistryBindingTimeoutsOutputReference <a name="GoogleAgentRegistryBindingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_agent_registry_binding.GoogleAgentRegistryBindingTimeoutsOutputReference;

new GoogleAgentRegistryBindingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleAgentRegistryBindingTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleAgentRegistryBinding.GoogleAgentRegistryBindingTimeouts">GoogleAgentRegistryBindingTimeouts</a>

---



