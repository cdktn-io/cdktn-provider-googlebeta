# `googleBiglakeIcebergNamespaceIamMember` Submodule <a name="`googleBiglakeIcebergNamespaceIamMember` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergNamespaceIamMember <a name="GoogleBiglakeIcebergNamespaceIamMember" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member google_biglake_iceberg_namespace_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMember;

GoogleBiglakeIcebergNamespaceIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .member(java.lang.String)
    .namespaceId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleBiglakeIcebergNamespaceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#condition GoogleBiglakeIcebergNamespaceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition"></a>

```java
public void putCondition(GoogleBiglakeIcebergNamespaceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMember;

GoogleBiglakeIcebergNamespaceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMember;

GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMember;

GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMember;

GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBiglakeIcebergNamespaceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBiglakeIcebergNamespaceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergNamespaceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference">GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.condition"></a>

```java
public GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference">GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.conditionInput"></a>

```java
public GoogleBiglakeIcebergNamespaceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergNamespaceIamMemberCondition <a name="GoogleBiglakeIcebergNamespaceIamMemberCondition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMemberCondition;

GoogleBiglakeIcebergNamespaceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#expression GoogleBiglakeIcebergNamespaceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#title GoogleBiglakeIcebergNamespaceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#description GoogleBiglakeIcebergNamespaceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#expression GoogleBiglakeIcebergNamespaceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#title GoogleBiglakeIcebergNamespaceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#description GoogleBiglakeIcebergNamespaceIamMember#description}.

---

### GoogleBiglakeIcebergNamespaceIamMemberConfig <a name="GoogleBiglakeIcebergNamespaceIamMemberConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMemberConfig;

GoogleBiglakeIcebergNamespaceIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalog(java.lang.String)
    .member(java.lang.String)
    .namespaceId(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleBiglakeIcebergNamespaceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#catalog GoogleBiglakeIcebergNamespaceIamMember#catalog}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#member GoogleBiglakeIcebergNamespaceIamMember#member}.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#namespace_id GoogleBiglakeIcebergNamespaceIamMember#namespace_id}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#role GoogleBiglakeIcebergNamespaceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.condition"></a>

```java
public GoogleBiglakeIcebergNamespaceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#condition GoogleBiglakeIcebergNamespaceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#id GoogleBiglakeIcebergNamespaceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_biglake_iceberg_namespace_iam_member#project GoogleBiglakeIcebergNamespaceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference <a name="GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_namespace_iam_member.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference;

new GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergNamespaceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamMember.GoogleBiglakeIcebergNamespaceIamMemberCondition">GoogleBiglakeIcebergNamespaceIamMemberCondition</a>

---



