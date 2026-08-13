# `googleComputeNetworkFirewallPolicyIamBinding` Submodule <a name="`googleComputeNetworkFirewallPolicyIamBinding` Submodule" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkFirewallPolicyIamBinding <a name="GoogleComputeNetworkFirewallPolicyIamBinding" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding google_compute_network_firewall_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyIamBinding(Construct Scope, string Id, GoogleComputeNetworkFirewallPolicyIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig">GoogleComputeNetworkFirewallPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig">GoogleComputeNetworkFirewallPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.putCondition"></a>

```csharp
private void PutCondition(GoogleComputeNetworkFirewallPolicyIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkFirewallPolicyIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeNetworkFirewallPolicyIamBinding resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkFirewallPolicyIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkFirewallPolicyIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkFirewallPolicyIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference">GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.condition"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference">GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.conditionInput"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkFirewallPolicyIamBindingCondition <a name="GoogleComputeNetworkFirewallPolicyIamBindingCondition" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#expression GoogleComputeNetworkFirewallPolicyIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#title GoogleComputeNetworkFirewallPolicyIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#description GoogleComputeNetworkFirewallPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#expression GoogleComputeNetworkFirewallPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#title GoogleComputeNetworkFirewallPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#description GoogleComputeNetworkFirewallPolicyIamBinding#description}.

---

### GoogleComputeNetworkFirewallPolicyIamBindingConfig <a name="GoogleComputeNetworkFirewallPolicyIamBindingConfig" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyIamBindingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] Members,
    string Name,
    string Role,
    GoogleComputeNetworkFirewallPolicyIamBindingCondition Condition = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#members GoogleComputeNetworkFirewallPolicyIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#name GoogleComputeNetworkFirewallPolicyIamBinding#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#role GoogleComputeNetworkFirewallPolicyIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#id GoogleComputeNetworkFirewallPolicyIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#project GoogleComputeNetworkFirewallPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#members GoogleComputeNetworkFirewallPolicyIamBinding#members}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#name GoogleComputeNetworkFirewallPolicyIamBinding#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#role GoogleComputeNetworkFirewallPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.condition"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#condition GoogleComputeNetworkFirewallPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#id GoogleComputeNetworkFirewallPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_compute_network_firewall_policy_iam_binding#project GoogleComputeNetworkFirewallPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference <a name="GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeNetworkFirewallPolicyIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkFirewallPolicyIamBinding.GoogleComputeNetworkFirewallPolicyIamBindingCondition">GoogleComputeNetworkFirewallPolicyIamBindingCondition</a>

---



