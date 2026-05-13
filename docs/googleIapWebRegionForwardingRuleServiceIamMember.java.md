# `googleIapWebRegionForwardingRuleServiceIamMember` Submodule <a name="`googleIapWebRegionForwardingRuleServiceIamMember` Submodule" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMember <a name="GoogleIapWebRegionForwardingRuleServiceIamMember" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member google_iap_web_region_forwarding_rule_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMember;

GoogleIapWebRegionForwardingRuleServiceIamMember.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRuleRegionServiceName(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapWebRegionForwardingRuleServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.forwardingRuleRegionServiceName">forwardingRuleRegionServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRuleRegionServiceName`<sup>Required</sup> <a name="forwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.forwardingRuleRegionServiceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.member"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#condition GoogleIapWebRegionForwardingRuleServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition"></a>

```java
public void putCondition(GoogleIapWebRegionForwardingRuleServiceIamMemberCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMember;

GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMember;

GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMember;

GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMember;

GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleIapWebRegionForwardingRuleServiceIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleIapWebRegionForwardingRuleServiceIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleIapWebRegionForwardingRuleServiceIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIapWebRegionForwardingRuleServiceIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceNameInput">forwardingRuleRegionServiceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.memberInput">memberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceName">forwardingRuleRegionServiceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.member">member</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.condition"></a>

```java
public GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference">GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.conditionInput"></a>

```java
public GoogleIapWebRegionForwardingRuleServiceIamMemberCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---

##### `forwardingRuleRegionServiceNameInput`<sup>Optional</sup> <a name="forwardingRuleRegionServiceNameInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceNameInput"></a>

```java
public java.lang.String getForwardingRuleRegionServiceNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.memberInput"></a>

```java
public java.lang.String getMemberInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `forwardingRuleRegionServiceName`<sup>Required</sup> <a name="forwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.forwardingRuleRegionServiceName"></a>

```java
public java.lang.String getForwardingRuleRegionServiceName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMember.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMemberCondition <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberCondition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition;

GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#expression GoogleIapWebRegionForwardingRuleServiceIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#title GoogleIapWebRegionForwardingRuleServiceIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#description GoogleIapWebRegionForwardingRuleServiceIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#expression GoogleIapWebRegionForwardingRuleServiceIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#title GoogleIapWebRegionForwardingRuleServiceIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#description GoogleIapWebRegionForwardingRuleServiceIamMember#description}.

---

### GoogleIapWebRegionForwardingRuleServiceIamMemberConfig <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberConfig" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig;

GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .forwardingRuleRegionServiceName(java.lang.String)
    .member(java.lang.String)
    .role(java.lang.String)
//  .condition(GoogleIapWebRegionForwardingRuleServiceIamMemberCondition)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forwardingRuleRegionServiceName">forwardingRuleRegionServiceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.member">member</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `forwardingRuleRegionServiceName`<sup>Required</sup> <a name="forwardingRuleRegionServiceName" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.forwardingRuleRegionServiceName"></a>

```java
public java.lang.String getForwardingRuleRegionServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#forwarding_rule_region_service_name GoogleIapWebRegionForwardingRuleServiceIamMember#forwarding_rule_region_service_name}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.member"></a>

```java
public java.lang.String getMember();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#member GoogleIapWebRegionForwardingRuleServiceIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#role GoogleIapWebRegionForwardingRuleServiceIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.condition"></a>

```java
public GoogleIapWebRegionForwardingRuleServiceIamMemberCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#condition GoogleIapWebRegionForwardingRuleServiceIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#id GoogleIapWebRegionForwardingRuleServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#project GoogleIapWebRegionForwardingRuleServiceIamMember#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_iap_web_region_forwarding_rule_service_iam_member#region GoogleIapWebRegionForwardingRuleServiceIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference <a name="GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_iap_web_region_forwarding_rule_service_iam_member.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference;

new GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberConditionOutputReference.property.internalValue"></a>

```java
public GoogleIapWebRegionForwardingRuleServiceIamMemberCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIapWebRegionForwardingRuleServiceIamMember.GoogleIapWebRegionForwardingRuleServiceIamMemberCondition">GoogleIapWebRegionForwardingRuleServiceIamMemberCondition</a>

---



