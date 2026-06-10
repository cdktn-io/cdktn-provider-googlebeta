# `googleDataplexEntryLink` Submodule <a name="`googleDataplexEntryLink` Submodule" id="@cdktn/provider-google-beta.googleDataplexEntryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexEntryLink <a name="GoogleDataplexEntryLink" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link google_dataplex_entry_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLink;

GoogleDataplexEntryLink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
    .entryLinkId(java.lang.String)
    .entryLinkType(java.lang.String)
    .entryReferences(IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences>)
    .location(java.lang.String)
//  .aspects(IResolvable|java.util.List<GoogleDataplexEntryLinkAspects>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexEntryLinkTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryReferences">entryReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>></code> | entry_references block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.aspects">aspects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>></code> | aspects block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryGroupId"></a>

- *Type:* java.lang.String

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_group_id GoogleDataplexEntryLink#entry_group_id}

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryLinkId"></a>

- *Type:* java.lang.String

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_link_id GoogleDataplexEntryLink#entry_link_id}

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryLinkType"></a>

- *Type:* java.lang.String

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_link_type GoogleDataplexEntryLink#entry_link_type}

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.entryReferences"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>>

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_references GoogleDataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#location GoogleDataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.aspects"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#aspects GoogleDataplexEntryLink#aspects}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#deletion_policy GoogleDataplexEntryLink#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#timeouts GoogleDataplexEntryLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects">putAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences">putEntryReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetAspects">resetAspects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAspects` <a name="putAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects"></a>

```java
public void putAspects(IResolvable|java.util.List<GoogleDataplexEntryLinkAspects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putAspects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>>

---

##### `putEntryReferences` <a name="putEntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences"></a>

```java
public void putEntryReferences(IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putEntryReferences.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts"></a>

```java
public void putTimeouts(GoogleDataplexEntryLinkTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---

##### `resetAspects` <a name="resetAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetAspects"></a>

```java
public void resetAspects()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataplexEntryLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLink;

GoogleDataplexEntryLink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLink;

GoogleDataplexEntryLink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLink;

GoogleDataplexEntryLink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLink;

GoogleDataplexEntryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleDataplexEntryLink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleDataplexEntryLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleDataplexEntryLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleDataplexEntryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataplexEntryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspects">aspects</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList">GoogleDataplexEntryLinkAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferences">entryReferences</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList">GoogleDataplexEntryLinkEntryReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference">GoogleDataplexEntryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspectsInput">aspectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupIdInput">entryGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkIdInput">entryLinkIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkTypeInput">entryLinkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferencesInput">entryReferencesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspects"></a>

```java
public GoogleDataplexEntryLinkAspectsList getAspects();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList">GoogleDataplexEntryLinkAspectsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferences"></a>

```java
public GoogleDataplexEntryLinkEntryReferencesList getEntryReferences();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList">GoogleDataplexEntryLinkEntryReferencesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeouts"></a>

```java
public GoogleDataplexEntryLinkTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference">GoogleDataplexEntryLinkTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `aspectsInput`<sup>Optional</sup> <a name="aspectsInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.aspectsInput"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkAspects> getAspectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `entryGroupIdInput`<sup>Optional</sup> <a name="entryGroupIdInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupIdInput"></a>

```java
public java.lang.String getEntryGroupIdInput();
```

- *Type:* java.lang.String

---

##### `entryLinkIdInput`<sup>Optional</sup> <a name="entryLinkIdInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkIdInput"></a>

```java
public java.lang.String getEntryLinkIdInput();
```

- *Type:* java.lang.String

---

##### `entryLinkTypeInput`<sup>Optional</sup> <a name="entryLinkTypeInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkTypeInput"></a>

```java
public java.lang.String getEntryLinkTypeInput();
```

- *Type:* java.lang.String

---

##### `entryReferencesInput`<sup>Optional</sup> <a name="entryReferencesInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryReferencesInput"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences> getEntryReferencesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.timeoutsInput"></a>

```java
public IResolvable|GoogleDataplexEntryLinkTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkId"></a>

```java
public java.lang.String getEntryLinkId();
```

- *Type:* java.lang.String

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.entryLinkType"></a>

```java
public java.lang.String getEntryLinkType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexEntryLinkAspects <a name="GoogleDataplexEntryLinkAspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkAspects;

GoogleDataplexEntryLinkAspects.builder()
    .aspect(GoogleDataplexEntryLinkAspectsAspect)
    .aspectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | The map keys of the Aspects which the service should modify. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspect"></a>

```java
public GoogleDataplexEntryLinkAspectsAspect getAspect();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#aspect GoogleDataplexEntryLink#aspect}

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

The map keys of the Aspects which the service should modify.

It should be the aspect type reference in the format '{project_number}.{location_id}.{aspect_type_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#aspect_key GoogleDataplexEntryLink#aspect_key}

---

### GoogleDataplexEntryLinkAspectsAspect <a name="GoogleDataplexEntryLinkAspectsAspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkAspectsAspect;

GoogleDataplexEntryLinkAspectsAspect.builder()
    .data(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.property.data">data</a></code> | <code>java.lang.String</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#data GoogleDataplexEntryLink#data}

---

### GoogleDataplexEntryLinkConfig <a name="GoogleDataplexEntryLinkConfig" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkConfig;

GoogleDataplexEntryLinkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entryGroupId(java.lang.String)
    .entryLinkId(java.lang.String)
    .entryLinkType(java.lang.String)
    .entryReferences(IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences>)
    .location(java.lang.String)
//  .aspects(IResolvable|java.util.List<GoogleDataplexEntryLinkAspects>)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleDataplexEntryLinkTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryGroupId">entryGroupId</a></code> | <code>java.lang.String</code> | The id of the entry group this entry link is in. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkId">entryLinkId</a></code> | <code>java.lang.String</code> | The id of the entry link to create. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkType">entryLinkType</a></code> | <code>java.lang.String</code> | Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryReferences">entryReferences</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>></code> | entry_references block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the entry. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.aspects">aspects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>></code> | aspects block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entryGroupId`<sup>Required</sup> <a name="entryGroupId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryGroupId"></a>

```java
public java.lang.String getEntryGroupId();
```

- *Type:* java.lang.String

The id of the entry group this entry link is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_group_id GoogleDataplexEntryLink#entry_group_id}

---

##### `entryLinkId`<sup>Required</sup> <a name="entryLinkId" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkId"></a>

```java
public java.lang.String getEntryLinkId();
```

- *Type:* java.lang.String

The id of the entry link to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_link_id GoogleDataplexEntryLink#entry_link_id}

---

##### `entryLinkType`<sup>Required</sup> <a name="entryLinkType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryLinkType"></a>

```java
public java.lang.String getEntryLinkType();
```

- *Type:* java.lang.String

Relative resource name of the Entry Link Type used to create this Entry Link. For example: projects/dataplex-types/locations/global/entryLinkTypes/definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_link_type GoogleDataplexEntryLink#entry_link_type}

---

##### `entryReferences`<sup>Required</sup> <a name="entryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.entryReferences"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences> getEntryReferences();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>>

entry_references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#entry_references GoogleDataplexEntryLink#entry_references}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#location GoogleDataplexEntryLink#location}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.aspects"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkAspects> getAspects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>>

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#aspects GoogleDataplexEntryLink#aspects}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#deletion_policy GoogleDataplexEntryLink#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#id GoogleDataplexEntryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#project GoogleDataplexEntryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkConfig.property.timeouts"></a>

```java
public GoogleDataplexEntryLinkTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#timeouts GoogleDataplexEntryLink#timeouts}

---

### GoogleDataplexEntryLinkEntryReferences <a name="GoogleDataplexEntryLinkEntryReferences" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkEntryReferences;

GoogleDataplexEntryLinkEntryReferences.builder()
    .name(java.lang.String)
//  .path(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.name">name</a></code> | <code>java.lang.String</code> | The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.path">path</a></code> | <code>java.lang.String</code> | The path in the Entry that is referenced in the Entry Link. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.type">type</a></code> | <code>java.lang.String</code> | The reference type of the Entry. Possible values: ["SOURCE", "TARGET"]. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The relative resource name of the referenced Entry, of the form: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#name GoogleDataplexEntryLink#name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path in the Entry that is referenced in the Entry Link.

Empty path denotes that the Entry itself is referenced in the Entry Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#path GoogleDataplexEntryLink#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The reference type of the Entry. Possible values: ["SOURCE", "TARGET"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#type GoogleDataplexEntryLink#type}

---

### GoogleDataplexEntryLinkTimeouts <a name="GoogleDataplexEntryLinkTimeouts" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkTimeouts;

GoogleDataplexEntryLinkTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#create GoogleDataplexEntryLink#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#delete GoogleDataplexEntryLink#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#update GoogleDataplexEntryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#create GoogleDataplexEntryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#delete GoogleDataplexEntryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_dataplex_entry_link#update GoogleDataplexEntryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexEntryLinkAspectsAspectOutputReference <a name="GoogleDataplexEntryLinkAspectsAspectOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkAspectsAspectOutputReference;

new GoogleDataplexEntryLinkAspectsAspectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.aspectType">aspectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectType`<sup>Required</sup> <a name="aspectType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.aspectType"></a>

```java
public java.lang.String getAspectType();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference.property.internalValue"></a>

```java
public GoogleDataplexEntryLinkAspectsAspect getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---


### GoogleDataplexEntryLinkAspectsList <a name="GoogleDataplexEntryLinkAspectsList" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkAspectsList;

new GoogleDataplexEntryLinkAspectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get"></a>

```java
public GoogleDataplexEntryLinkAspectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkAspects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>>

---


### GoogleDataplexEntryLinkAspectsOutputReference <a name="GoogleDataplexEntryLinkAspectsOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkAspectsOutputReference;

new GoogleDataplexEntryLinkAspectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect">putAspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspect` <a name="putAspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect"></a>

```java
public void putAspect(GoogleDataplexEntryLinkAspectsAspect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.putAspect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference">GoogleDataplexEntryLinkAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectInput">aspectInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKeyInput">aspectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKey">aspectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspect"></a>

```java
public GoogleDataplexEntryLinkAspectsAspectOutputReference getAspect();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspectOutputReference">GoogleDataplexEntryLinkAspectsAspectOutputReference</a>

---

##### `aspectInput`<sup>Optional</sup> <a name="aspectInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectInput"></a>

```java
public GoogleDataplexEntryLinkAspectsAspect getAspectInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsAspect">GoogleDataplexEntryLinkAspectsAspect</a>

---

##### `aspectKeyInput`<sup>Optional</sup> <a name="aspectKeyInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKeyInput"></a>

```java
public java.lang.String getAspectKeyInput();
```

- *Type:* java.lang.String

---

##### `aspectKey`<sup>Required</sup> <a name="aspectKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.aspectKey"></a>

```java
public java.lang.String getAspectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspectsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexEntryLinkAspects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkAspects">GoogleDataplexEntryLinkAspects</a>

---


### GoogleDataplexEntryLinkEntryReferencesList <a name="GoogleDataplexEntryLinkEntryReferencesList" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkEntryReferencesList;

new GoogleDataplexEntryLinkEntryReferencesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get"></a>

```java
public GoogleDataplexEntryLinkEntryReferencesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleDataplexEntryLinkEntryReferences> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>>

---


### GoogleDataplexEntryLinkEntryReferencesOutputReference <a name="GoogleDataplexEntryLinkEntryReferencesOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkEntryReferencesOutputReference;

new GoogleDataplexEntryLinkEntryReferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferencesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexEntryLinkEntryReferences getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkEntryReferences">GoogleDataplexEntryLinkEntryReferences</a>

---


### GoogleDataplexEntryLinkTimeoutsOutputReference <a name="GoogleDataplexEntryLinkTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_dataplex_entry_link.GoogleDataplexEntryLinkTimeoutsOutputReference;

new GoogleDataplexEntryLinkTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleDataplexEntryLinkTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataplexEntryLink.GoogleDataplexEntryLinkTimeouts">GoogleDataplexEntryLinkTimeouts</a>

---



