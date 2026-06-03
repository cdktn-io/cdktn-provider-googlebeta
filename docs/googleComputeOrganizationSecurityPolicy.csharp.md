# `googleComputeOrganizationSecurityPolicy` Submodule <a name="`googleComputeOrganizationSecurityPolicy` Submodule" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeOrganizationSecurityPolicy <a name="GoogleComputeOrganizationSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy google_compute_organization_security_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicy(Construct Scope, string Id, GoogleComputeOrganizationSecurityPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig">GoogleComputeOrganizationSecurityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig">GoogleComputeOrganizationSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig">PutAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig">ResetAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName">ResetShortName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedOptionsConfig` <a name="PutAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig"></a>

```csharp
private void PutAdvancedOptionsConfig(GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putAdvancedOptionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeOrganizationSecurityPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `ResetAdvancedOptionsConfig` <a name="ResetAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetAdvancedOptionsConfig"></a>

```csharp
private void ResetAdvancedOptionsConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetShortName` <a name="ResetShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetShortName"></a>

```csharp
private void ResetShortName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeOrganizationSecurityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeOrganizationSecurityPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeOrganizationSecurityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeOrganizationSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeOrganizationSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput">AdvancedOptionsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput">ShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AdvancedOptionsConfig`<sup>Required</sup> <a name="AdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfig"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference AdvancedOptionsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference">GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference</a>

---

##### `AdvancedOptionsConfigInput`<sup>Optional</sup> <a name="AdvancedOptionsConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.advancedOptionsConfigInput"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortNameInput"></a>

```csharp
public string ShortNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSecurityPolicyTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig {
    GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfig = null,
    string JsonParsing = null,
    string LogLevel = null,
    string RequestBodyInspectionSize = null,
    string[] UserIpRequestHeaders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | json_custom_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize">RequestBodyInspectionSize</a></code> | <code>string</code> | The maximum request size chosen by the customer with Waf enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | An optional list of case-insensitive request header names to use for resolving the client source IP address. |

---

##### `JsonCustomConfig`<sup>Optional</sup> <a name="JsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonCustomConfig"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

json_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_custom_config GoogleComputeOrganizationSecurityPolicy#json_custom_config}

---

##### `JsonParsing`<sup>Optional</sup> <a name="JsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; set; }
```

- *Type:* string

JSON body parsing. Supported values include: "DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL". Possible values: ["DISABLED", "STANDARD", "STANDARD_WITH_GRAPHQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#json_parsing GoogleComputeOrganizationSecurityPolicy#json_parsing}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Logging level. Supported values include: "NORMAL", "VERBOSE". Possible values: ["NORMAL", "VERBOSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#log_level GoogleComputeOrganizationSecurityPolicy#log_level}

---

##### `RequestBodyInspectionSize`<sup>Optional</sup> <a name="RequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.requestBodyInspectionSize"></a>

```csharp
public string RequestBodyInspectionSize { get; set; }
```

- *Type:* string

The maximum request size chosen by the customer with Waf enabled.

Values supported are "8KB", "16KB", "32KB", "48KB" and "64KB".
Values are case insensitive. Possible values: ["8KB", "16KB", "32KB", "48KB", "64KB"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#request_body_inspection_size GoogleComputeOrganizationSecurityPolicy#request_body_inspection_size}

---

##### `UserIpRequestHeaders`<sup>Optional</sup> <a name="UserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; set; }
```

- *Type:* string[]

An optional list of case-insensitive request header names to use for resolving the client source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#user_ip_request_headers GoogleComputeOrganizationSecurityPolicy#user_ip_request_headers}

---

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
    string[] ContentTypes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | A list of content types to be parsed as JSON. |

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; set; }
```

- *Type:* string[]

A list of content types to be parsed as JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#content_types GoogleComputeOrganizationSecurityPolicy#content_types}

---

### GoogleComputeOrganizationSecurityPolicyConfig <a name="GoogleComputeOrganizationSecurityPolicyConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfig = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string ShortName = null,
    GoogleComputeOrganizationSecurityPolicyTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig">AdvancedOptionsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | advanced_options_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description">Description</a></code> | <code>string</code> | A textual description for the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName">ShortName</a></code> | <code>string</code> | User-provided name of the organization security policy. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type">Type</a></code> | <code>string</code> | The type indicates the intended use of the security policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of this OrganizationSecurityPolicy in the Cloud Resource Hierarchy. Format: organizations/{organization_id} or folders/{folder_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#parent GoogleComputeOrganizationSecurityPolicy#parent}

---

##### `AdvancedOptionsConfig`<sup>Optional</sup> <a name="AdvancedOptionsConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.advancedOptionsConfig"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig AdvancedOptionsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

advanced_options_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#advanced_options_config GoogleComputeOrganizationSecurityPolicy#advanced_options_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#deletion_policy GoogleComputeOrganizationSecurityPolicy#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A textual description for the organization security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#description GoogleComputeOrganizationSecurityPolicy#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is FIREWALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#display_name GoogleComputeOrganizationSecurityPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#id GoogleComputeOrganizationSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ShortName`<sup>Optional</sup> <a name="ShortName" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.shortName"></a>

```csharp
public string ShortName { get; set; }
```

- *Type:* string

User-provided name of the organization security policy.

The name should be unique in the organization in which the security policy is created. This should only be used when SecurityPolicyType is CLOUD_ARMOR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#short_name GoogleComputeOrganizationSecurityPolicy#short_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.timeouts"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#timeouts GoogleComputeOrganizationSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type indicates the intended use of the security policy.

This field can be set only at resource creation time.

**NOTE** : 'FIREWALL' type is deprecated and will be removed in a future major release. Please use 'google_compute_firewall_policy' instead." Possible values: ["FIREWALL", "CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_INTERNAL_SERVICE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#type GoogleComputeOrganizationSecurityPolicy#type}

---

### GoogleComputeOrganizationSecurityPolicyTimeouts <a name="GoogleComputeOrganizationSecurityPolicyTimeouts" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#create GoogleComputeOrganizationSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#delete GoogleComputeOrganizationSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_organization_security_policy#update GoogleComputeOrganizationSecurityPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput">ContentTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes">ContentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentTypesInput`<sup>Optional</sup> <a name="ContentTypesInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypesInput"></a>

```csharp
public string[] ContentTypesInput { get; }
```

- *Type:* string[]

---

##### `ContentTypes`<sup>Required</sup> <a name="ContentTypes" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.contentTypes"></a>

```csharp
public string[] ContentTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference <a name="GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig">PutJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig">ResetJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing">ResetJsonParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize">ResetRequestBodyInspectionSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders">ResetUserIpRequestHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJsonCustomConfig` <a name="PutJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig"></a>

```csharp
private void PutJsonCustomConfig(GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.putJsonCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `ResetJsonCustomConfig` <a name="ResetJsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonCustomConfig"></a>

```csharp
private void ResetJsonCustomConfig()
```

##### `ResetJsonParsing` <a name="ResetJsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetJsonParsing"></a>

```csharp
private void ResetJsonParsing()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetRequestBodyInspectionSize` <a name="ResetRequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetRequestBodyInspectionSize"></a>

```csharp
private void ResetRequestBodyInspectionSize()
```

##### `ResetUserIpRequestHeaders` <a name="ResetUserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.resetUserIpRequestHeaders"></a>

```csharp
private void ResetUserIpRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig">JsonCustomConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput">JsonCustomConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput">JsonParsingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput">RequestBodyInspectionSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput">UserIpRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing">JsonParsing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize">RequestBodyInspectionSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders">UserIpRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonCustomConfig`<sup>Required</sup> <a name="JsonCustomConfig" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfig"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference JsonCustomConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfigOutputReference</a>

---

##### `JsonCustomConfigInput`<sup>Optional</sup> <a name="JsonCustomConfigInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonCustomConfigInput"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig JsonCustomConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigJsonCustomConfig</a>

---

##### `JsonParsingInput`<sup>Optional</sup> <a name="JsonParsingInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsingInput"></a>

```csharp
public string JsonParsingInput { get; }
```

- *Type:* string

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `RequestBodyInspectionSizeInput`<sup>Optional</sup> <a name="RequestBodyInspectionSizeInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSizeInput"></a>

```csharp
public string RequestBodyInspectionSizeInput { get; }
```

- *Type:* string

---

##### `UserIpRequestHeadersInput`<sup>Optional</sup> <a name="UserIpRequestHeadersInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeadersInput"></a>

```csharp
public string[] UserIpRequestHeadersInput { get; }
```

- *Type:* string[]

---

##### `JsonParsing`<sup>Required</sup> <a name="JsonParsing" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.jsonParsing"></a>

```csharp
public string JsonParsing { get; }
```

- *Type:* string

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `RequestBodyInspectionSize`<sup>Required</sup> <a name="RequestBodyInspectionSize" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.requestBodyInspectionSize"></a>

```csharp
public string RequestBodyInspectionSize { get; }
```

- *Type:* string

---

##### `UserIpRequestHeaders`<sup>Required</sup> <a name="UserIpRequestHeaders" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.userIpRequestHeaders"></a>

```csharp
public string[] UserIpRequestHeaders { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig">GoogleComputeOrganizationSecurityPolicyAdvancedOptionsConfig</a>

---


### GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeOrganizationSecurityPolicyTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeOrganizationSecurityPolicy.GoogleComputeOrganizationSecurityPolicyTimeouts">GoogleComputeOrganizationSecurityPolicyTimeouts</a>

---



