# `googleComputeRouterNamedSet` Submodule <a name="`googleComputeRouterNamedSet` Submodule" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNamedSet <a name="GoogleComputeRouterNamedSet" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set google_compute_router_named_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSet;

GoogleComputeRouterNamedSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .router(java.lang.String)
    .type(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .elements(IResolvable|java.util.List<GoogleComputeRouterNamedSetElements>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRouterNamedSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this Named Set will be configured. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of the Named Set. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>></code> | elements block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#id GoogleComputeRouterNamedSet#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#project GoogleComputeRouterNamedSet#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the router resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#name GoogleComputeRouterNamedSet#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the Cloud Router in which this Named Set will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#router GoogleComputeRouterNamedSet#router}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#type GoogleComputeRouterNamedSet#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#deletion_policy GoogleComputeRouterNamedSet#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of the Named Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#description GoogleComputeRouterNamedSet#description}

---

##### `elements`<sup>Optional</sup> <a name="elements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.elements"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>>

elements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#elements GoogleComputeRouterNamedSet#elements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#id GoogleComputeRouterNamedSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#project GoogleComputeRouterNamedSet#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the router resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#region GoogleComputeRouterNamedSet#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#timeouts GoogleComputeRouterNamedSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putElements">putElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetElements">resetElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putElements` <a name="putElements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putElements"></a>

```java
public void putElements(IResolvable|java.util.List<GoogleComputeRouterNamedSetElements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putElements.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRouterNamedSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetElements` <a name="resetElements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetElements"></a>

```java
public void resetElements()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeRouterNamedSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSet;

GoogleComputeRouterNamedSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSet;

GoogleComputeRouterNamedSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSet;

GoogleComputeRouterNamedSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSet;

GoogleComputeRouterNamedSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRouterNamedSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleComputeRouterNamedSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRouterNamedSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRouterNamedSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNamedSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList">GoogleComputeRouterNamedSetElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference">GoogleComputeRouterNamedSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.elementsInput">elementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.elements"></a>

```java
public GoogleComputeRouterNamedSetElementsList getElements();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList">GoogleComputeRouterNamedSetElementsList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.timeouts"></a>

```java
public GoogleComputeRouterNamedSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference">GoogleComputeRouterNamedSetTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `elementsInput`<sup>Optional</sup> <a name="elementsInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.elementsInput"></a>

```java
public IResolvable|java.util.List<GoogleComputeRouterNamedSetElements> getElementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.timeoutsInput"></a>

```java
public IResolvable|GoogleComputeRouterNamedSetTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNamedSetConfig <a name="GoogleComputeRouterNamedSetConfig" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetConfig;

GoogleComputeRouterNamedSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .router(java.lang.String)
    .type(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .elements(IResolvable|java.util.List<GoogleComputeRouterNamedSetElements>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRouterNamedSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which this Named Set will be configured. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of the Named Set. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.elements">elements</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>></code> | elements block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#id GoogleComputeRouterNamedSet#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#project GoogleComputeRouterNamedSet#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the router resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the Named Set, which must be a resource ID segment and unique within all named sets owned by the Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#name GoogleComputeRouterNamedSet#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the Cloud Router in which this Named Set will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#router GoogleComputeRouterNamedSet#router}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the Named Set. Possible values: ["NAMED_SET_TYPE_PREFIX", "NAMED_SET_TYPE_COMMUNITY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#type GoogleComputeRouterNamedSet#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#deletion_policy GoogleComputeRouterNamedSet#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of the Named Set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#description GoogleComputeRouterNamedSet#description}

---

##### `elements`<sup>Optional</sup> <a name="elements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.elements"></a>

```java
public IResolvable|java.util.List<GoogleComputeRouterNamedSetElements> getElements();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>>

elements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#elements GoogleComputeRouterNamedSet#elements}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#id GoogleComputeRouterNamedSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#project GoogleComputeRouterNamedSet#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the router resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#region GoogleComputeRouterNamedSet#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetConfig.property.timeouts"></a>

```java
public GoogleComputeRouterNamedSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#timeouts GoogleComputeRouterNamedSet#timeouts}

---

### GoogleComputeRouterNamedSetElements <a name="GoogleComputeRouterNamedSetElements" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetElements;

GoogleComputeRouterNamedSetElements.builder()
    .expression(java.lang.String)
//  .description(java.lang.String)
//  .location(java.lang.String)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.expression">expression</a></code> | <code>java.lang.String</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.description">description</a></code> | <code>java.lang.String</code> | Description of the expression. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.location">location</a></code> | <code>java.lang.String</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.title">title</a></code> | <code>java.lang.String</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#expression GoogleComputeRouterNamedSet#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#description GoogleComputeRouterNamedSet#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#location GoogleComputeRouterNamedSet#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#title GoogleComputeRouterNamedSet#title}

---

### GoogleComputeRouterNamedSetTimeouts <a name="GoogleComputeRouterNamedSetTimeouts" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetTimeouts;

GoogleComputeRouterNamedSetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#create GoogleComputeRouterNamedSet#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#delete GoogleComputeRouterNamedSet#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#update GoogleComputeRouterNamedSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#create GoogleComputeRouterNamedSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#delete GoogleComputeRouterNamedSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_router_named_set#update GoogleComputeRouterNamedSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNamedSetElementsList <a name="GoogleComputeRouterNamedSetElementsList" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetElementsList;

new GoogleComputeRouterNamedSetElementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.get"></a>

```java
public GoogleComputeRouterNamedSetElementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleComputeRouterNamedSetElements> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>>

---


### GoogleComputeRouterNamedSetElementsOutputReference <a name="GoogleComputeRouterNamedSetElementsOutputReference" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetElementsOutputReference;

new GoogleComputeRouterNamedSetElementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElementsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRouterNamedSetElements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetElements">GoogleComputeRouterNamedSetElements</a>

---


### GoogleComputeRouterNamedSetTimeoutsOutputReference <a name="GoogleComputeRouterNamedSetTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_compute_router_named_set.GoogleComputeRouterNamedSetTimeoutsOutputReference;

new GoogleComputeRouterNamedSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleComputeRouterNamedSetTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeRouterNamedSet.GoogleComputeRouterNamedSetTimeouts">GoogleComputeRouterNamedSetTimeouts</a>

---



