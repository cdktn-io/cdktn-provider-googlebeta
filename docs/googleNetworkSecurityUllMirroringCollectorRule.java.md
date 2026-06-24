# `googleNetworkSecurityUllMirroringCollectorRule` Submodule <a name="`googleNetworkSecurityUllMirroringCollectorRule` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRule <a name="GoogleNetworkSecurityUllMirroringCollectorRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule google_network_security_ull_mirroring_collector_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRule;

GoogleNetworkSecurityUllMirroringCollectorRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .match(GoogleNetworkSecurityUllMirroringCollectorRuleMatch)
    .ullMirroringCollector(java.lang.String)
    .ullMirroringCollectorRuleId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector">ullMirroringCollector</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId">ullMirroringCollectorRuleId</a></code> | <code>java.lang.String</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.match"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `ullMirroringCollector`<sup>Required</sup> <a name="ullMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollector"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ullMirroringCollectorRuleId`<sup>Required</sup> <a name="ullMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.ullMirroringCollectorRuleId"></a>

- *Type:* java.lang.String

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#deletion_policy GoogleNetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch"></a>

```java
public void putMatch(GoogleNetworkSecurityUllMirroringCollectorRuleMatch value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRule;

GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRule;

GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRule;

GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRule;

GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollectorRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollectorRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkSecurityUllMirroringCollectorRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollectorRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput">ullMirroringCollectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput">ullMirroringCollectorRuleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector">ullMirroringCollector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId">ullMirroringCollectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.match"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeouts"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.matchInput"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleMatch getMatchInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---

##### `ullMirroringCollectorInput`<sup>Optional</sup> <a name="ullMirroringCollectorInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorInput"></a>

```java
public java.lang.String getUllMirroringCollectorInput();
```

- *Type:* java.lang.String

---

##### `ullMirroringCollectorRuleIdInput`<sup>Optional</sup> <a name="ullMirroringCollectorRuleIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleIdInput"></a>

```java
public java.lang.String getUllMirroringCollectorRuleIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ullMirroringCollector`<sup>Required</sup> <a name="ullMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollector"></a>

```java
public java.lang.String getUllMirroringCollector();
```

- *Type:* java.lang.String

---

##### `ullMirroringCollectorRuleId`<sup>Required</sup> <a name="ullMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.ullMirroringCollectorRuleId"></a>

```java
public java.lang.String getUllMirroringCollectorRuleId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleConfig <a name="GoogleNetworkSecurityUllMirroringCollectorRuleConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig;

GoogleNetworkSecurityUllMirroringCollectorRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .match(GoogleNetworkSecurityUllMirroringCollectorRuleMatch)
    .ullMirroringCollector(java.lang.String)
    .ullMirroringCollectorRuleId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match">match</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | match block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector">ullMirroringCollector</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId">ullMirroringCollectorRuleId</a></code> | <code>java.lang.String</code> | ID for the new UllMirroringCollectorRule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#location GoogleNetworkSecurityUllMirroringCollectorRule#location}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.match"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleMatch getMatch();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#match GoogleNetworkSecurityUllMirroringCollectorRule#match}

---

##### `ullMirroringCollector`<sup>Required</sup> <a name="ullMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollector"></a>

```java
public java.lang.String getUllMirroringCollector();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector}

---

##### `ullMirroringCollectorRuleId`<sup>Required</sup> <a name="ullMirroringCollectorRuleId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.ullMirroringCollectorRuleId"></a>

```java
public java.lang.String getUllMirroringCollectorRuleId();
```

- *Type:* java.lang.String

ID for the new UllMirroringCollectorRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ull_mirroring_collector_rule_id GoogleNetworkSecurityUllMirroringCollectorRule#ull_mirroring_collector_rule_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#deletion_policy GoogleNetworkSecurityUllMirroringCollectorRule#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#id GoogleNetworkSecurityUllMirroringCollectorRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#labels GoogleNetworkSecurityUllMirroringCollectorRule#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#project GoogleNetworkSecurityUllMirroringCollectorRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleConfig.property.timeouts"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#timeouts GoogleNetworkSecurityUllMirroringCollectorRule#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleMatch <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatch" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch;

GoogleNetworkSecurityUllMirroringCollectorRuleMatch.builder()
//  .direction(java.lang.String)
//  .dstIpRanges(java.util.List<java.lang.String>)
//  .ipProtocols(java.util.List<java.lang.String>)
//  .srcIpRanges(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction of traffic to match. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges">dstIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Destination IP ranges to match. When unset, matches any destination IP range. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Source IP ranges to match. When unset, matches any source IP range. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction of traffic to match.

When unset, matches any direction.
Possible values:
INGRESS: Traffic inbound to the capture point.
EGRESS: Traffic outbound from the capture point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#direction GoogleNetworkSecurityUllMirroringCollectorRule#direction}

---

##### `dstIpRanges`<sup>Optional</sup> <a name="dstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.dstIpRanges"></a>

```java
public java.util.List<java.lang.String> getDstIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Destination IP ranges to match. When unset, matches any destination IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#dst_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#dst_ip_ranges}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

IP protocols to match. When unset, matches any IP protocol. Examples: "tcp", "udp", "icmp". If unset, matches any IP protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#ip_protocols GoogleNetworkSecurityUllMirroringCollectorRule#ip_protocols}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Source IP ranges to match. When unset, matches any source IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#src_ip_ranges GoogleNetworkSecurityUllMirroringCollectorRule#src_ip_ranges}

---

### GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts;

GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#create GoogleNetworkSecurityUllMirroringCollectorRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#delete GoogleNetworkSecurityUllMirroringCollectorRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_network_security_ull_mirroring_collector_rule#update GoogleNetworkSecurityUllMirroringCollectorRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference;

new GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges">resetDstIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDstIpRanges` <a name="resetDstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetDstIpRanges"></a>

```java
public void resetDstIpRanges()
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetIpProtocols"></a>

```java
public void resetIpProtocols()
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.resetSrcIpRanges"></a>

```java
public void resetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput">dstIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges">dstIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `dstIpRangesInput`<sup>Optional</sup> <a name="dstIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getDstIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getIpProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `dstIpRanges`<sup>Required</sup> <a name="dstIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.dstIpRanges"></a>

```java
public java.util.List<java.lang.String> getDstIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.ipProtocols"></a>

```java
public java.util.List<java.lang.String> getIpProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.srcIpRanges"></a>

```java
public java.util.List<java.lang.String> getSrcIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatchOutputReference.property.internalValue"></a>

```java
public GoogleNetworkSecurityUllMirroringCollectorRuleMatch getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleMatch">GoogleNetworkSecurityUllMirroringCollectorRuleMatch</a>

---


### GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_security_ull_mirroring_collector_rule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference;

new GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollectorRule.GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts">GoogleNetworkSecurityUllMirroringCollectorRuleTimeouts</a>

---



