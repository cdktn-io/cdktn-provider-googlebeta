# `googleComputeNetworkPeering` Submodule <a name="`googleComputeNetworkPeering` Submodule" id="@cdktn/provider-google-beta.googleComputeNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeering <a name="GoogleComputeNetworkPeering" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering google_compute_network_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkPeering(Construct Scope, string Id, GoogleComputeNetworkPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig">GoogleComputeNetworkPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig">GoogleComputeNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportCustomRoutes">ResetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp">ResetExportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportCustomRoutes">ResetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp">ResetImportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetUpdateStrategy">ResetUpdateStrategy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeNetworkPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetExportCustomRoutes` <a name="ResetExportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportCustomRoutes"></a>

```csharp
private void ResetExportCustomRoutes()
```

##### `ResetExportSubnetRoutesWithPublicIp` <a name="ResetExportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetExportSubnetRoutesWithPublicIp"></a>

```csharp
private void ResetExportSubnetRoutesWithPublicIp()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportCustomRoutes` <a name="ResetImportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportCustomRoutes"></a>

```csharp
private void ResetImportCustomRoutes()
```

##### `ResetImportSubnetRoutesWithPublicIp` <a name="ResetImportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetImportSubnetRoutesWithPublicIp"></a>

```csharp
private void ResetImportSubnetRoutesWithPublicIp()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateStrategy` <a name="ResetUpdateStrategy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.resetUpdateStrategy"></a>

```csharp
private void ResetUpdateStrategy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeNetworkPeering resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleComputeNetworkPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleComputeNetworkPeering resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference">GoogleComputeNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput">ExportSubnetRoutesWithPublicIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput">ImportSubnetRoutesWithPublicIpInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetworkInput">PeerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.updateStrategyInput">UpdateStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp">ExportSubnetRoutesWithPublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp">ImportSubnetRoutesWithPublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetwork">PeerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.updateStrategy">UpdateStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeouts"></a>

```csharp
public GoogleComputeNetworkPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference">GoogleComputeNetworkPeeringTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutesInput"></a>

```csharp
public bool|IResolvable ExportCustomRoutesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ExportSubnetRoutesWithPublicIpInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIpInput"></a>

```csharp
public bool|IResolvable ExportSubnetRoutesWithPublicIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutesInput"></a>

```csharp
public bool|IResolvable ImportCustomRoutesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ImportSubnetRoutesWithPublicIpInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIpInput"></a>

```csharp
public bool|IResolvable ImportSubnetRoutesWithPublicIpInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PeerNetworkInput`<sup>Optional</sup> <a name="PeerNetworkInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetworkInput"></a>

```csharp
public string PeerNetworkInput { get; }
```

- *Type:* string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleComputeNetworkPeeringTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---

##### `UpdateStrategyInput`<sup>Optional</sup> <a name="UpdateStrategyInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.updateStrategyInput"></a>

```csharp
public string UpdateStrategyInput { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportCustomRoutes"></a>

```csharp
public bool|IResolvable ExportCustomRoutes { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ExportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.exportSubnetRoutesWithPublicIp"></a>

```csharp
public bool|IResolvable ExportSubnetRoutesWithPublicIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importCustomRoutes"></a>

```csharp
public bool|IResolvable ImportCustomRoutes { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ImportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ImportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.importSubnetRoutesWithPublicIp"></a>

```csharp
public bool|IResolvable ImportSubnetRoutesWithPublicIp { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.peerNetwork"></a>

```csharp
public string PeerNetwork { get; }
```

- *Type:* string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

##### `UpdateStrategy`<sup>Required</sup> <a name="UpdateStrategy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.updateStrategy"></a>

```csharp
public string UpdateStrategy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringConfig <a name="GoogleComputeNetworkPeeringConfig" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Network,
    string PeerNetwork,
    string DeletionPolicy = null,
    bool|IResolvable ExportCustomRoutes = null,
    bool|IResolvable ExportSubnetRoutesWithPublicIp = null,
    string Id = null,
    bool|IResolvable ImportCustomRoutes = null,
    bool|IResolvable ImportSubnetRoutesWithPublicIp = null,
    string StackType = null,
    GoogleComputeNetworkPeeringTimeouts Timeouts = null,
    string UpdateStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.name">Name</a></code> | <code>string</code> | Name of the peering. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.network">Network</a></code> | <code>string</code> | The primary network of the peering. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.peerNetwork">PeerNetwork</a></code> | <code>string</code> | The peer network in the peering. The peer network may belong to a different project. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to export the custom routes to the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp">ExportSubnetRoutesWithPublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to export the custom routes from the peer network. Defaults to false. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp">ImportSubnetRoutesWithPublicIp</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.stackType">StackType</a></code> | <code>string</code> | Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.updateStrategy">UpdateStrategy</a></code> | <code>string</code> | The update strategy determines the semantics for updates and deletes to the peering connection configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#name GoogleComputeNetworkPeering#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The primary network of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#network GoogleComputeNetworkPeering#network}

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.peerNetwork"></a>

```csharp
public string PeerNetwork { get; set; }
```

- *Type:* string

The peer network in the peering. The peer network may belong to a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#peer_network GoogleComputeNetworkPeering#peer_network}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#deletion_policy GoogleComputeNetworkPeering#deletion_policy}

---

##### `ExportCustomRoutes`<sup>Optional</sup> <a name="ExportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportCustomRoutes"></a>

```csharp
public bool|IResolvable ExportCustomRoutes { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to export the custom routes to the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#export_custom_routes GoogleComputeNetworkPeering#export_custom_routes}

---

##### `ExportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="ExportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.exportSubnetRoutesWithPublicIp"></a>

```csharp
public bool|IResolvable ExportSubnetRoutesWithPublicIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#export_subnet_routes_with_public_ip GoogleComputeNetworkPeering#export_subnet_routes_with_public_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#id GoogleComputeNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportCustomRoutes`<sup>Optional</sup> <a name="ImportCustomRoutes" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importCustomRoutes"></a>

```csharp
public bool|IResolvable ImportCustomRoutes { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to export the custom routes from the peer network. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#import_custom_routes GoogleComputeNetworkPeering#import_custom_routes}

---

##### `ImportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="ImportSubnetRoutesWithPublicIp" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.importSubnetRoutesWithPublicIp"></a>

```csharp
public bool|IResolvable ImportSubnetRoutesWithPublicIp { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#import_subnet_routes_with_public_ip GoogleComputeNetworkPeering#import_subnet_routes_with_public_ip}.

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

Which IP version(s) of traffic and routes are allowed to be imported or exported between peer networks.

The default value is IPV4_ONLY. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#stack_type GoogleComputeNetworkPeering#stack_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.timeouts"></a>

```csharp
public GoogleComputeNetworkPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#timeouts GoogleComputeNetworkPeering#timeouts}

---

##### `UpdateStrategy`<sup>Optional</sup> <a name="UpdateStrategy" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringConfig.property.updateStrategy"></a>

```csharp
public string UpdateStrategy { get; set; }
```

- *Type:* string

The update strategy determines the semantics for updates and deletes to the peering connection configuration.

The default value is INDEPENDENT. Possible values: ["INDEPENDENT", "CONSENSUS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#update_strategy GoogleComputeNetworkPeering#update_strategy}

---

### GoogleComputeNetworkPeeringTimeouts <a name="GoogleComputeNetworkPeeringTimeouts" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#create GoogleComputeNetworkPeering#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#delete GoogleComputeNetworkPeering#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#update GoogleComputeNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#create GoogleComputeNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#delete GoogleComputeNetworkPeering#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_network_peering#update GoogleComputeNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleComputeNetworkPeeringTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleComputeNetworkPeering.GoogleComputeNetworkPeeringTimeouts">GoogleComputeNetworkPeeringTimeouts</a>

---



