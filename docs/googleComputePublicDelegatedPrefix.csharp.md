# `googleComputePublicDelegatedPrefix` Submodule <a name="`googleComputePublicDelegatedPrefix` Submodule" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePublicDelegatedPrefix <a name="GoogleComputePublicDelegatedPrefix" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix google_compute_public_delegated_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefix(Construct Scope, string Id, GoogleComputePublicDelegatedPrefixConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig">GoogleComputePublicDelegatedPrefixConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig">GoogleComputePublicDelegatedPrefixConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetAllocatablePrefixLength">ResetAllocatablePrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetIsLiveMigration">ResetIsLiveMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputePublicDelegatedPrefixTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---

##### `ResetAllocatablePrefixLength` <a name="ResetAllocatablePrefixLength" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetAllocatablePrefixLength"></a>

```csharp
private void ResetAllocatablePrefixLength()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLiveMigration` <a name="ResetIsLiveMigration" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetIsLiveMigration"></a>

```csharp
private void ResetIsLiveMigration()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputePublicDelegatedPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicDelegatedPrefix.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicDelegatedPrefix.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicDelegatedPrefix.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputePublicDelegatedPrefix.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputePublicDelegatedPrefix resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePublicDelegatedPrefix to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePublicDelegatedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputePublicDelegatedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.enableEnhancedIpv4Allocation">EnableEnhancedIpv4Allocation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.publicDelegatedSubPrefixs">PublicDelegatedSubPrefixs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList">GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference">GoogleComputePublicDelegatedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput">AllocatablePrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigrationInput">IsLiveMigrationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefixInput">ParentPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLength">AllocatablePrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigration">IsLiveMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefix">ParentPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnableEnhancedIpv4Allocation`<sup>Required</sup> <a name="EnableEnhancedIpv4Allocation" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.enableEnhancedIpv4Allocation"></a>

```csharp
public IResolvable EnableEnhancedIpv4Allocation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `PublicDelegatedSubPrefixs`<sup>Required</sup> <a name="PublicDelegatedSubPrefixs" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.publicDelegatedSubPrefixs"></a>

```csharp
public GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList PublicDelegatedSubPrefixs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList">GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeouts"></a>

```csharp
public GoogleComputePublicDelegatedPrefixTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference">GoogleComputePublicDelegatedPrefixTimeoutsOutputReference</a>

---

##### `AllocatablePrefixLengthInput`<sup>Optional</sup> <a name="AllocatablePrefixLengthInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput"></a>

```csharp
public double AllocatablePrefixLengthInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `IsLiveMigrationInput`<sup>Optional</sup> <a name="IsLiveMigrationInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigrationInput"></a>

```csharp
public bool|IResolvable IsLiveMigrationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentPrefixInput`<sup>Optional</sup> <a name="ParentPrefixInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefixInput"></a>

```csharp
public string ParentPrefixInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputePublicDelegatedPrefixTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---

##### `AllocatablePrefixLength`<sup>Required</sup> <a name="AllocatablePrefixLength" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.allocatablePrefixLength"></a>

```csharp
public double AllocatablePrefixLength { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `IsLiveMigration`<sup>Required</sup> <a name="IsLiveMigration" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.isLiveMigration"></a>

```csharp
public bool|IResolvable IsLiveMigration { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.parentPrefix"></a>

```csharp
public string ParentPrefix { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefix.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePublicDelegatedPrefixConfig <a name="GoogleComputePublicDelegatedPrefixConfig" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string IpCidrRange,
    string Name,
    string ParentPrefix,
    string Region,
    double AllocatablePrefixLength = null,
    string Description = null,
    string Id = null,
    bool|IResolvable IsLiveMigration = null,
    string Mode = null,
    string Project = null,
    GoogleComputePublicDelegatedPrefixTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP address range, in CIDR format, represented by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.parentPrefix">ParentPrefix</a></code> | <code>string</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.region">Region</a></code> | <code>string</code> | A region where the prefix will reside. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength">AllocatablePrefixLength</a></code> | <code>double</code> | The allocatable prefix length supported by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.isLiveMigration">IsLiveMigration</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.mode">Mode</a></code> | <code>string</code> | Specifies the mode of this IPv6 PDP. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP address range, in CIDR format, represented by this public delegated prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#ip_cidr_range GoogleComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#name GoogleComputePublicDelegatedPrefix#name}

---

##### `ParentPrefix`<sup>Required</sup> <a name="ParentPrefix" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.parentPrefix"></a>

```csharp
public string ParentPrefix { get; set; }
```

- *Type:* string

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#parent_prefix GoogleComputePublicDelegatedPrefix#parent_prefix}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#region GoogleComputePublicDelegatedPrefix#region}

---

##### `AllocatablePrefixLength`<sup>Optional</sup> <a name="AllocatablePrefixLength" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength"></a>

```csharp
public double AllocatablePrefixLength { get; set; }
```

- *Type:* double

The allocatable prefix length supported by this public delegated prefix.

This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#allocatable_prefix_length GoogleComputePublicDelegatedPrefix#allocatable_prefix_length}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#description GoogleComputePublicDelegatedPrefix#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#id GoogleComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLiveMigration`<sup>Optional</sup> <a name="IsLiveMigration" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.isLiveMigration"></a>

```csharp
public bool|IResolvable IsLiveMigration { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#is_live_migration GoogleComputePublicDelegatedPrefix#is_live_migration}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Specifies the mode of this IPv6 PDP.

MODE must be one of:

* DELEGATION
* EXTERNAL_IPV6_FORWARDING_RULE_CREATION
* EXTERNAL_IPV6_SUBNETWORK_CREATION
* INTERNAL_IPV6_SUBNETWORK_CREATION Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION", "EXTERNAL_IPV6_SUBNETWORK_CREATION", "INTERNAL_IPV6_SUBNETWORK_CREATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#mode GoogleComputePublicDelegatedPrefix#mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#project GoogleComputePublicDelegatedPrefix#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixConfig.property.timeouts"></a>

```csharp
public GoogleComputePublicDelegatedPrefixTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#timeouts GoogleComputePublicDelegatedPrefix#timeouts}

---

### GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs <a name="GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs {

};
```


### GoogleComputePublicDelegatedPrefixTimeouts <a name="GoogleComputePublicDelegatedPrefixTimeouts" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#create GoogleComputePublicDelegatedPrefix#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#delete GoogleComputePublicDelegatedPrefix#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#create GoogleComputePublicDelegatedPrefix#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_compute_public_delegated_prefix#delete GoogleComputePublicDelegatedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList <a name="GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get"></a>

```csharp
private GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference <a name="GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.allocatablePrefixLength">AllocatablePrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.delegateeProject">DelegateeProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.enableEnhancedIpv4Allocation">EnableEnhancedIpv4Allocation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.isAddress">IsAddress</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs">GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocatablePrefixLength`<sup>Required</sup> <a name="AllocatablePrefixLength" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.allocatablePrefixLength"></a>

```csharp
public double AllocatablePrefixLength { get; }
```

- *Type:* double

---

##### `DelegateeProject`<sup>Required</sup> <a name="DelegateeProject" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.delegateeProject"></a>

```csharp
public string DelegateeProject { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableEnhancedIpv4Allocation`<sup>Required</sup> <a name="EnableEnhancedIpv4Allocation" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.enableEnhancedIpv4Allocation"></a>

```csharp
public IResolvable EnableEnhancedIpv4Allocation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `IsAddress`<sup>Required</sup> <a name="IsAddress" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.isAddress"></a>

```csharp
public IResolvable IsAddress { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs">GoogleComputePublicDelegatedPrefixPublicDelegatedSubPrefixs</a>

---


### GoogleComputePublicDelegatedPrefixTimeoutsOutputReference <a name="GoogleComputePublicDelegatedPrefixTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputePublicDelegatedPrefixTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputePublicDelegatedPrefixTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputePublicDelegatedPrefix.GoogleComputePublicDelegatedPrefixTimeouts">GoogleComputePublicDelegatedPrefixTimeouts</a>

---



