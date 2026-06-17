# `googleKmsOrganizationKajPolicyConfig` Submodule <a name="`googleKmsOrganizationKajPolicyConfig` Submodule" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleKmsOrganizationKajPolicyConfig <a name="GoogleKmsOrganizationKajPolicyConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config google_kms_organization_kaj_policy_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfig(Construct Scope, string Id, GoogleKmsOrganizationKajPolicyConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig">GoogleKmsOrganizationKajPolicyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy">PutDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy">ResetDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultKeyAccessJustificationPolicy` <a name="PutDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void PutDefaultKeyAccessJustificationPolicy(GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putDefaultKeyAccessJustificationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleKmsOrganizationKajPolicyConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `ResetDefaultKeyAccessJustificationPolicy` <a name="ResetDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetDefaultKeyAccessJustificationPolicy"></a>

```csharp
private void ResetDefaultKeyAccessJustificationPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsOrganizationKajPolicyConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsOrganizationKajPolicyConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsOrganizationKajPolicyConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleKmsOrganizationKajPolicyConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleKmsOrganizationKajPolicyConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleKmsOrganizationKajPolicyConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleKmsOrganizationKajPolicyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleKmsOrganizationKajPolicyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput">DefaultKeyAccessJustificationPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Required</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference DefaultKeyAccessJustificationPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeouts"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference">GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference</a>

---

##### `DefaultKeyAccessJustificationPolicyInput`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicyInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.defaultKeyAccessJustificationPolicyInput"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleKmsOrganizationKajPolicyConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleKmsOrganizationKajPolicyConfigConfig <a name="GoogleKmsOrganizationKajPolicyConfigConfig" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Organization,
    GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy = null,
    string Id = null,
    GoogleKmsOrganizationKajPolicyConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization">Organization</a></code> | <code>string</code> | The organization number for which to retrieve config. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy">DefaultKeyAccessJustificationPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | default_key_access_justification_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The organization number for which to retrieve config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#organization GoogleKmsOrganizationKajPolicyConfig#organization}

---

##### `DefaultKeyAccessJustificationPolicy`<sup>Optional</sup> <a name="DefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.defaultKeyAccessJustificationPolicy"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy DefaultKeyAccessJustificationPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

default_key_access_justification_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#default_key_access_justification_policy GoogleKmsOrganizationKajPolicyConfig#default_key_access_justification_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#id GoogleKmsOrganizationKajPolicyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigConfig.property.timeouts"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#timeouts GoogleKmsOrganizationKajPolicyConfig#timeouts}

---

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy {
    string[] AllowedAccessReasons = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey. |

---

##### `AllowedAccessReasons`<sup>Optional</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; set; }
```

- *Type:* string[]

A KeyAccessJustificationsPolicy specifies zero or more allowed AccessReason values for encrypt, decrypt, and sign operations on a CryptoKey.

Possible values: ["CUSTOMER_INITIATED_SUPPORT", "GOOGLE_INITIATED_SERVICE", "THIRD_PARTY_DATA_REQUEST", "GOOGLE_INITIATED_REVIEW", "CUSTOMER_INITIATED_ACCESS", "GOOGLE_INITIATED_SYSTEM_OPERATION", "REASON_NOT_EXPECTED", "MODIFIED_CUSTOMER_INITIATED_ACCESS", "MODIFIED_GOOGLE_INITIATED_SYSTEM_OPERATION", "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT", "CUSTOMER_AUTHORIZED_WORKFLOW_SERVICING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#allowed_access_reasons GoogleKmsOrganizationKajPolicyConfig#allowed_access_reasons}

---

### GoogleKmsOrganizationKajPolicyConfigTimeouts <a name="GoogleKmsOrganizationKajPolicyConfigTimeouts" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#create GoogleKmsOrganizationKajPolicyConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#delete GoogleKmsOrganizationKajPolicyConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_kms_organization_kaj_policy_config#update GoogleKmsOrganizationKajPolicyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons">ResetAllowedAccessReasons</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedAccessReasons` <a name="ResetAllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.resetAllowedAccessReasons"></a>

```csharp
private void ResetAllowedAccessReasons()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput">AllowedAccessReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons">AllowedAccessReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedAccessReasonsInput`<sup>Optional</sup> <a name="AllowedAccessReasonsInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasonsInput"></a>

```csharp
public string[] AllowedAccessReasonsInput { get; }
```

- *Type:* string[]

---

##### `AllowedAccessReasons`<sup>Required</sup> <a name="AllowedAccessReasons" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.allowedAccessReasons"></a>

```csharp
public string[] AllowedAccessReasons { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy">GoogleKmsOrganizationKajPolicyConfigDefaultKeyAccessJustificationPolicy</a>

---


### GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference <a name="GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleKmsOrganizationKajPolicyConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleKmsOrganizationKajPolicyConfig.GoogleKmsOrganizationKajPolicyConfigTimeouts">GoogleKmsOrganizationKajPolicyConfigTimeouts</a>

---



